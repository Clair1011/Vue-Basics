const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullNmae(){
      if (this.name ==='') {
      return '';
    }
      return this.name + ' ' + 'Chen';
    }
  },
  methods: {
    // 將名字reset
    resetInput(){
      this.name = '';
    },
    // 設定名字
    setName(event) {
      this.name = event.target.value;
    },
    // counter + 10
    add(num) {
      this.counter = this.counter + num;
    },
    // counter - 5
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
