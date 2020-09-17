<template>
      <div class="main">
        <!-- Header -->
        <header>
          <nav class="navbar navbar-light justify-content-start" style="background: #ffd401;">
            <router-link class="navbar-brand" to="/"><img
                src="../../images/logo.png"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt
                loading="lazy"
              />
              Hotel</router-link>
              <router-link class="nav-link" to="/">Services</router-link>
              <router-link class="nav-link" to="reservations">Reservations</router-link>

          </nav>
        </header>
        <router-view />
        <!-- Footer -->
        <div class="footer">
          <span>Made with love by Ana Hernández 2020</span>
        </div>
      </div>

</template>
<style lang="scss">
  .main{
    height: 100vh;
  }
  .footer{
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    padding: 10px;
    background: rgb(245, 228, 149);
  }
</style>