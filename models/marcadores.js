class Marcadores {
  constructor() {
    this.activos = [];
  }

  agregarMarcador( marcador ) {
    let encontrado = this.activos.findIndex( marker => marker.id === marcador.id );
    
    if( encontrado === -1 ) {
      this.activos = [ ...this.activos, marcador ];
    }
    return marcador;
  }

  removerMarcador( id ) {
    this.activos = this.activos.filter( marker => marker.id !== id );
    return this.marcador;
  }

  actualizarMarcador( marcador ) {
    this.activos = this.activos.filter( marker => {
      if( marker.id === marcador.id ) {
        return marcador;
      }
    });
  }
}

module.exports = Marcadores;