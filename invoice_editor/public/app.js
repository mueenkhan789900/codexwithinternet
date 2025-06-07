const canvas = new fabric.Canvas('c');
const fileInput = document.getElementById('fileInput');
const addTextBtn = document.getElementById('addText');
const downloadBtn = document.getElementById('download');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    fabric.Image.fromURL(evt.target.result, (img) => {
      canvas.clear();
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height,
      });
    });
  };
  reader.readAsDataURL(file);
});

addTextBtn.addEventListener('click', () => {
  const textbox = new fabric.Textbox('Text', {
    left: 50,
    top: 50,
    fill: '#000',
    fontSize: 20,
  });
  canvas.add(textbox).setActiveObject(textbox);
});

downloadBtn.addEventListener('click', () => {
  html2canvas(document.getElementById('canvas-container')).then((canvasEl) => {
    const imgData = canvasEl.toDataURL('image/png');
    const pdf = new jspdf.jsPDF('l', 'pt', [canvasEl.width, canvasEl.height]);
    pdf.addImage(imgData, 'PNG', 0, 0, canvasEl.width, canvasEl.height);
    pdf.save('invoice.pdf');
  });
});
