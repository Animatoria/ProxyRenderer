import './../scss/index.scss';

var vm = new Vue({
  el: '#landing',
  data: {
    proxyList: [],
    proxyType: ['Transparent', 'Anonymous', 'Elite'],
    proxyDetails: {},
    country: null
  },
  computed: {
    aliveProxy: function() {

      var list = [];

      this.proxyList.forEach(function(proxy){
        if (proxy.alive === true && proxy.country === vm.country) list.push(proxy);
      })

      return list
    },
    countries: function() {

      var list = new Set;

      this.proxyList.forEach(function(proxy){
        list.add(proxy.country);
      })

      return list
    }
  },
  methods: {
    showDetails: function(id) {
      this.aliveProxy.forEach(function(proxy) {
        if (proxy.id === id) vm.proxyDetails = proxy
      })
    }
  }
});

var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();

xhr.open('GET', 'proxy.json', true);

xhr.onload = function() {
  vm.proxyList = JSON.parse(this.responseText);
}

xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}

xhr.send();
