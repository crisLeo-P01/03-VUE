const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Ingresando datos de verduras',
    frutas:[
      {nombre: 'Manzana', cantidad: 0}
    ],
    nuevaFruta: [],
    total: 0
  },

  methods: {
    agregarFrutas () {
      this.frutas.push({
        nombre: this.nuevaFruta,
      });
      this.nuevaFruta = [];
    }
  },
  computed: {
    sumarFrutas() {
      this.total = 0;
      for(fruta of this.frutas) {
        this.total = this.total + fruta.cantidad;
      }
      return this.total;
    }
  },

})