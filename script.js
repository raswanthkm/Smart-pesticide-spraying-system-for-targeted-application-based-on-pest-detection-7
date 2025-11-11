document.getElementById('year').textContent = new Date().getFullYear();
const input = document.getElementById('imgInput');
const preview = document.getElementById('previewBox');
const analyzeBtn = document.getElementById('analyzeBtn');
const resetBtn = document.getElementById('resetBtn');
const resultMsg = document.getElementById('resultMsg');

input.addEventListener('change', () => {
  const file = input.files[0];
  if(!file){preview.textContent='No image selected';return;}
  const url = URL.createObjectURL(file);
  preview.innerHTML = `<img src="${url}" alt="preview" />`;
  resultMsg.textContent = 'Image ready for analysis.';
});

resetBtn.addEventListener('click', ()=>{
  input.value=''; preview.textContent='No image selected'; resultMsg.textContent='Awaiting input...';
});

analyzeBtn.addEventListener('click', ()=>{
  const file = input.files[0];
  if(!file){alert('Please upload an image first.');return;}
  resultMsg.textContent='Analyzing...';
  setTimeout(()=>{
    // Simple heuristic simulation
    const pestFound = Math.random() > 0.5;
    if(pestFound){
      const pests=['Aphid','Caterpillar','Whitefly'];
      const pest=pests[Math.floor(Math.random()*pests.length)];
      localStorage.setItem('detectedPest', pest);
      window.location.href='result.html';
    } else {
      resultMsg.innerHTML='<strong>🪴 Pest not found.</strong><br>No pesticide needed.';
    }
  },1000);
});
