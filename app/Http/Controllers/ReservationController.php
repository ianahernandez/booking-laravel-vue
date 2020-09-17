<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Reservation;
use App\Models\TypeRoom;
use Carbon\Carbon;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {    
        return response()->json([
            'ok' => true,
            'reservations' => Reservation::all(),
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validation = $this->validateFields($request);

        if ($validation->fails()) {
            return response()->json([
                'ok' => false,
                'errors' => $validation->errors()
            ],400);
        }
            

        $reservation = Reservation::create([
            'client_name' => $request->client_name,
            'type_id' => $request->type_id,
            'checkin' => $this->dateFormat($request->checkin),
            'checkout' => $this->dateFormat($request->checkout)
        ]);
        
        $reservation->save();

        return response()->json([
            'ok' => true,
            'reservation' => $reservation
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $reservation = Reservation::find($id);

        if(!$reservation){
            return response()->json([
                'ok' => false,
                'error' => 'Record not found',
            ],404);
        }

        $validation = $this->validateFields($request);

        if ($validation->fails()) {
            return response()->json([
                'ok' => false,
                'errors' => $validation->errors()
            ],400);
        }
        
        $reservation->client_name = $request->client_name;
        $reservation->type_id = $request->type_id;
        $reservation->checkin = $this->dateFormat($request->checkin);
        $reservation->checkout = $this->dateFormat($request->checkout);
        $reservation->save();

        return response()->json([
            'ok' => true,
            'reservation' => $reservation
        ],201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $reservation = Reservation::find($id);

        if(!$reservation){
            return response()->json([
                'ok' => false,
                'error' => 'Record not found',
            ],404);
        }

        if($this->dateFormat($reservation->checkin)->diffInDays(now(),false) > 0){
            return response()->json([
                'ok' => false,
                'error' => 'You cannot delete a past resevervation. This reservation chekin already past.',
            ],400);
        }
        $reservation->delete();
        return response()->json([
            'ok' => true,
            'reservation' => $reservation,
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function availability(Request $request){


        $validation = Validator::make($request->all(), [
            'type_id' => 'required',
            'checkin' => 'required|date|after:tomorrow',
            'checkout' => 'required|date|after_or_equal:checkin',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'ok' => false,
                'errors' => $validation->errors()
            ],400);
        }

        $availability = $this->checkAvailability($request->type_id, $request->checkin, $request->checkout);

        return response()->json([
            'ok' => true,
            'type'=> $request->type,
            'availability' => $availability,
        ],200);

    }

    public function checkAvailability($type_id, $checkin, $checkout){
        $reservation = Reservation::where('type_id',$type_id)
                                    ->where('checkin', '<=', $this->dateFormat($checkin))
                                    ->where('checkout','>=', $this->dateFormat($checkout))
                                    ->count();
        return 5 - $reservation;
    }

    public function validateFields($request){
        $validator = Validator::make($request->all(), [
            'client_name' => 'required',
            'type_id' => 'required',
            'checkin' => 'required|date|after:tomorrow',
            'checkout' => 'required|date|after_or_equal:checkin',
        ]);
        return $validator;
    }

    public function dateFormat($value){
        return Carbon::create($value);
    }
}
