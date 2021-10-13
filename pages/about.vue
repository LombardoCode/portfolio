<template>
  <div>
    <Navbar :fixed_navbar="false" class="bg-black text-white"/>
    <ReusableContainer :top_spacing="false">
      <div class="mt-12">
        <div class="grid grid-cols-12">
          <div class="col-span-5">
            <img src="https://picsum.photos/400">
          </div>
          <div class="col-span-7">
            <h1 class="text-4xl font-bold uppercase">About myself</h1>
            <p class="text-lg mt-4 mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta earum impedit ipsa totam tempora recusandae vero labore eos laudantium tempore. Aliquam unde distinctio dicta totam a eligendi error, numquam enim!</p>
            <p class="text-lg mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta earum impedit ipsa totam tempora recusandae vero labore eos laudantium tempore. Aliquam unde distinctio dicta totam a eligendi error, numquam enim!</p>
          </div>
        </div>
      </div>
    </ReusableContainer>
  </div>
</template>

<script>
import cv_data from './cv_data.json';
export default {
  name: 'cv',
  data() {
    return {
      cv: cv_data
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800;900&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap')

  $nunito: 'Nunito Sans', 'Arial', 'sans-serif'
  $oswald: 'Oswald', 'Arial', 'sans-serif'
  $raleway: 'Raleway', 'Arial', 'sans-serif'
  $roboto: 'Roboto', 'Arial', 'sans-serif'

  .nunito
    font-family: $nunito
  .oswald
    font-family: $oswald
  .raleway
    font-family: $raleway
  .roboto
    font-family: $roboto
</style>
