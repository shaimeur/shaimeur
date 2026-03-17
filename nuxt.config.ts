// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head : {
      title : 'My Protfolio SSR',
      titleTemplate : '%s shaimeur'
    }
  },
  $development : {
    app : {
      head :{
        title : 'My Protfolio SSR (Development Mode!!)',
      }
    }
  },
  $production : {
    app : {
      head : {
        title : 'My Protfolio SSR (Production Mode!!)',
      }
    }
  }
})
