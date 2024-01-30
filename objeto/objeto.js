const pcGamer = {
  processador: "Intel i7 2600k",
  placa_de_video: "GTX 1060 6gb",
  memoriaRam: "16gb RAM",
  fonte: "500w",
  armazenamento: "2TB de SSD",
  completo: function () {
    return (
      "O pc é composto por um " +
      this.processador +
      " e uma placa de vídeo " +
      this.placa_de_video +
      " somados com mais " +
      this.memoriaRam
    );
  },
};

console.log(pcGamer.processador, pcGamer.fonte);
console.log(pcGamer.completo());
