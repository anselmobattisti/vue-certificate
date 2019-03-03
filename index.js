var app = new Vue({
  el: '#app',
  data: {
    txtCerificates: '',
    titleEvent: 'Roda de Conversa',
    titleCertificate: 'Certificado de Amigo',
    dateCertificate: '11/03/2019',
    showCertificate: true,
    certificates: [
      {
        name: 'Maria da Silva',
        function: 'Palestrante',
        hours: 4
      },
      {
        name: 'Martinha',
        function: 'Ouvinte',
        hours: 4
      },
      {
        name: 'Paulinho',
        function: 'Organizador',
        hours: 12
      },
    ]
  },

  methods: {
    processCertificates () {
      this.showCertificate = true;
      tempData = this.csvToArray(this.txtCerificates)
      tempData.forEach(element => {
        let auxCertificate = []

        auxCertificate.name = element[0]
        auxCertificate.function = element[1]
        auxCertificate.hours = element[2]

        this.certificates.push(auxCertificate)
      });

    },

    manage () {
      this.certificates = []
      this.showCertificate = false;
    },

    csvToArray(text) {
      let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
      for (l of text) {
          if ('"' === l) {
              if (s && l === p) row[i] += l;
              s = !s;
          } else if (',' === l && s) l = row[++i] = '';
          else if ('\n' === l && s) {
              if ('\r' === p) row[i] = row[i].slice(0, -1);
              row = ret[++r] = [l = '']; i = 0;
          } else row[i] += l;
          p = l;
      }
      return ret;
    }
  }
})

