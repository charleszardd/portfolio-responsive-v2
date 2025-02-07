<template>
    <v-container fluid class="footer-container px-10 mt-10">
    
        <div class="footer px-0 d-flex justify-space-between" >
            <v-col class="">
                <span class="text-h6 text-yellow">Charles Portfolio 2025</span>
                <p class="text-subtitle-1 text-grey-lighten-1 mt-1">Thank you for viewing this portfolio.</p>
            </v-col>
            <v-col class="d-flex ">
                <div class="mr-5">
                <span class="text-h6 text-yellow">Contacts</span>
                <p class="text-subtitle-1 text-grey-lighten-1 mt-1"><v-icon class="mr-2 text-subtitle-1">mdi-phone</v-icon>09638623607</p>
                <p class="text-subtitle-1 text-grey-lighten-1"><v-icon class="mr-2">mdi-email</v-icon>casenascharles@gmail.com</p>
            </div>
            <div class="pl-5">
                <span class="text-h6 text-yellow">Social Links</span>
                <div class="mt-1">
                    <v-btn class="mr-2"><v-icon>mdi-facebook</v-icon></v-btn>
                    <v-btn class="mr-2"><v-icon>mdi-instagram</v-icon></v-btn>
                    <v-btn class="mr-2"><v-icon>mdi-github</v-icon></v-btn>
                    <v-btn class="mr-2"><v-icon>mdi-linkedin</v-icon></v-btn>
                </div>
            </div>
            </v-col>

        </div>
        
        <p class="text-reserve pr-10 py-2 text-subtitle-1">©2025 Portfolio</p>
    </v-container>
</template>
<style scoped>
.footer-container{
    background-color: #171a21;
    height: 50vh;
    position: relative;
}
.text-reserve{
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;

}
</style>