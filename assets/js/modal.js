(function(){window.showConfirmModal=function(s,t){return t=t||{},new Promise(function(r){var e=document.getElementById("mavside-modal-overlay");e||(e=document.createElement("div"),e.id="mavside-modal-overlay",e.className="mavside-modal-overlay",document.body.appendChild(e)),e.innerHTML=`
                <div class="mavside-modal" role="dialog" aria-modal="true">
                    <div class="mavside-modal-content"><div id="mavside-modal-message"></div></div>
                    <div class="mavside-modal-actions">
                        <button id="mavside-modal-cancel" class="mavside-modal-btn">${t.cancelText||"Cancel"}</button>
                        <button id="mavside-modal-confirm" class="mavside-modal-btn primary">${t.confirmText||"Confirm"}</button>
                    </div>
                </div>
            `;const v=e.querySelector("#mavside-modal-message"),a=e.querySelector("#mavside-modal-confirm"),i=e.querySelector("#mavside-modal-cancel");v.textContent=s||"",a.textContent=t.confirmText||"Confirm",i.textContent=t.cancelText||"Cancel",e.style.display="flex";const c=document.activeElement;function o(n){if(e.style.display="none",a.removeEventListener("click",d),i.removeEventListener("click",l),document.removeEventListener("keydown",m),c&&c.focus)try{c.focus()}catch{}r(n)}function d(n){n&&n.preventDefault(),o(!0)}function l(n){n&&n.preventDefault(),o(!1)}function m(n){n.key==="Escape"&&o(!1),n.key==="Enter"&&o(!0)}a.addEventListener("click",d),i.addEventListener("click",l),document.addEventListener("keydown",m),setTimeout(function(){try{a.focus()}catch{}},10)})}})();
