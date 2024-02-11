<template>
    <body>
    <v-row class="pt-10" justify="center">
    <v-card 
      variant="outlined"
      class="mx-auto text-center pa-5 align-center"
      width="370"
      title="USER LOGIN"
      style="border-radius:15px; color:#0D47A1;background-color:rgb(241, 241, 241)">
      <v-row>
        <v-col cols="12" class="text-center">
        Login to your account
        </v-col>
      </v-row>
      <v-icon size="70" style="color: #0D47A1;">mdi mdi-account-circle</v-icon>
    
      <v-container>
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
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          placeholder="Enter your password"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="password"
          color="primary"
          style="color: #0D47A1;"
          label="Password"
          hint="At least 8 characters"
              
        ></v-text-field>
        <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a>
           <div > <v-checkbox
              v-model="check"
              label="Remember me"
              style="color: #0D47A1;"
              value="primary"
              hide-details
            ></v-checkbox></div>
        
        <div  style="color: #0D47A1;">Don't have an account?
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            style="color: #0D47A1;"
            rel="noopener noreferrer"
            target="_blank"
          >
            Register here</a></div>
  
      </v-container>
  
      <v-row>
        <v-col cols="12">
      <v-btn block rounded="xl" size="x-large" style="background-color: #0D47A1;color:white;">
            Login
        </v-btn>
        </v-col>
    </v-row>
    </v-card>
  </v-row>
    </body>
  
  </template>
  <script>
    export default {
      data () {
        return {
          visible:false,
          check:'Remember me'
          
        }
      },
    }
  </script>
  <style>
  body{
    font-family: "Roboto", sans-serif;
    font-size:14px;
    background-color:#0D47A1;
    background-size : 100% ;
    background-repeat : no-repeat;
    background-attachment : fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .blur-background {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(50px);
  }
  </style>
  
  //background-image: url("https://papers.co/wallpaper/papers.co-sl98-pastel-blue-blur-gradation-29-wallpaper.jpg");
  //https://th.bing.com/th/id/R.af077f1f49af54c3335c2c61b5a18975?rik=LUw1tydcnZOMkw&riu=http%3a%2f%2fwww.solidbackgrounds.com%2fimages%2f2048x2048%2f2048x2048-dark-blue-solid-color-background.jpg&ehk=gGp9X5bElQ5PqKRdRmZCkAnqpUXfKWeKW3YNSAp9HBM%3d&risl=&pid=ImgRaw&r=0
  //https://theawesomedaily.com/wp-content/uploads/2018/07/cool-backgrounds-1-1.png