<template>
  <body>
    <v-row class="pt-10" justify="center">
        <v-card 
      variant="outlined"
      class="mx-auto text-center pa-5 align-center"
      width="470"
      title="USER LOGIN"
      style="border-radius:15px; color:#0D47A1;background-color:rgb(241, 241, 241)">
      <v-row>
        <v-col cols="12" class="text-center">
          Create a new account
        </v-col>
      </v-row>
      <v-container>
        <v-text-field rounded
        append-inner-icon="mdi-account"
        placeholder="Fullname"
        v-model="FullName"
        color="primary"
        label="Fullname"
        variant="outlined"
        style="color: #0D47A1;">>
        </v-text-field>

        <v-text-field rounded
        append-inner-icon="mdi-email"
        placeholder="Username or Email"
        v-model="Username"
        color="primary"
        label="Username/Email"
        variant="outlined"
        style="color: #0D47A1;">
      </v-text-field>

      <v-text-field rounded
        append-inner-icon="mdi-cellphone"
        placeholder="Enter the 10 digit number"
        v-model="Phone"
        color="primary"
        label="Phone number"
        variant="outlined"
        style="color: #0D47A1;">
      </v-text-field>

      <v-text-field rounded 
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          placeholder="Enter your new password"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="password"
          color="primary"
          style="color: #0D47A1;"
          label="Create Password"
          hint="At least 8 characters">
        </v-text-field>

        <v-text-field rounded 
      :append-inner-icon="visible1 ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible1 ? 'text' : 'password'"
          placeholder="Re-enter your password"
          variant="outlined"
          @click:append-inner="visible1 = !visible1"
          v-model="password"
          color="primary"
          style="color: #0D47A1;"
          label="Confirm Password">
        </v-text-field>

        <div  style="color: #0D47A1;">Already have an account?
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            style="color: #0D47A1;"
            rel="noopener noreferrer"
            target="_blank">
            Login now</a></div>
     <v-row>
        &nbsp;
     </v-row>
     <v-row>
        <v-col cols="12">
      <v-btn block rounded="xl" size="x-large" style="background-color: #0D47A1;color:white;">
            Sign Up
        </v-btn>
        </v-col>
    </v-row>
      </v-container>
      </v-card> 
    </v-row>
  </body>
</template>

<script>
    export default {
      data () {
        return {
          visible:false,
          visible1:false
          
        }
      },
    }
  </script>