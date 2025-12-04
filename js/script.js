    function playDemo(el){
      const parent = el.closest('.video-card');
      // simple demo: toggle a modal-like overlay
      const overlay = document.createElement('div');
      overlay.style.position='fixed';overlay.style.left=0;overlay.style.top=0;overlay.style.right=0;overlay.style.bottom=0;overlay.style.display='flex';overlay.style.alignItems='center';overlay.style.justifyContent='center';overlay.style.background='rgba(0,0,0,0.6)';overlay.style.zIndex=9999;
      const box = document.createElement('div');box.style.width='90%';box.style.maxWidth='900px';box.style.background='#000';box.style.padding='24px';box.style.borderRadius='12px';box.style.boxShadow='0 10px 40px rgba(2,6,23,0.6)';
      box.innerHTML = '<div style="color:#fff;font-weight:700;margin-bottom:12px">Aperçu vidéo</div><div style="background:#111;height:420px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#aaa">Video player (demo)</div>';
      overlay.appendChild(box);
      overlay.onclick=function(e){ if(e.target===overlay) overlay.remove(); }
      document.body.appendChild(overlay);
    }
