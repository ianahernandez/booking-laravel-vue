<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeRoom;

class TypeRoomController extends Controller
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
            'typesRoom' => TypeRoom::all(),
        ],200);
    }

}
