!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("canvas")):"function"==typeof define&&define.amd?define(["exports","canvas"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).CanvasConstructor={},t.canvas)}(this,(function(t,e){"use strict";const r="undefined"!=typeof window,n=(()=>{if(r)return"undefined"==typeof HTMLCanvasElement?null:HTMLCanvasElement;try{return require("canvas-prebuilt")}catch(t){return require("canvas")}})(),s=(()=>{if(!r&&"parseFont"in n)return t=>n.parseFont(t).size;const t=/([\d.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q)/i,e=new Map;return r=>{const n=e.get(r);if(n)return n;const s=t.exec(r);if(!s)return null;let i=Number(s[1]);switch(s[2]){case"pt":i/=.75;break;case"pc":i*=16;break;case"in":i*=96;break;case"cm":i*=96/2.54;break;case"mm":i*=96/25.4;break;case"em":case"rem":i*=16/.75;break;case"q":i*=96/25.4/4}return e.set(r,i),i}})(),i=(t,e,r)=>{const n=[],s=[],i=t.measureText(" ").width;for(const a of e.split(/\r?\n/)){let e=r;for(const o of a.split(" ")){const a=t.measureText(o).width,h=a+i;h>e?(s.length&&(n.push(s.join(" ")),s.length=0),s.push(o),e=r-a):(e-=h,s.push(o))}s.length&&(n.push(s.join(" ")),s.length=0)}return n.join("\n")};class a{constructor(t,r,n){this.canvas=e.createCanvas(t,r,n),this.context=this.canvas.getContext("2d")}get windowCanvas(){return this.canvas}get width(){return this.canvas.width}set width(t){this.canvas.width=t}get height(){return this.canvas.height}set height(t){this.canvas.height=t}get textFontHeight(){return s(this.context.font)}changeCanvasSize(t,e){return this.changeCanvasWidth(t).changeCanvasHeight(e)}changeCanvasWidth(t){return this.width=t,this}changeCanvasHeight(t){return this.height=t,this}save(){return this.context.save(),this}restore(){return this.context.restore(),this}rotate(t){return this.context.rotate(t),this}scale(t,e){return this.context.scale(t,e),this}translate(t,e){return this.context.translate(t,e),this}clip(t){return this.context.clip(t),this}setTransform(...t){return this.context.setTransform(...t),this}resetTransformation(){return this.setTransform(1,0,0,1,0,0)}getImageData(t,e,r,n,s){if("function"==typeof t&&(s=t,t=0),s){if("function"!=typeof s)throw new TypeError("Callback must be a function");return s.call(this,this.context.getImageData(null!=t?t:0,null!=e?e:0,null!=r?r:this.width,null!=n?n:this.height),this),this}return this.context.getImageData(null!=t?t:0,null!=e?e:0,null!=r?r:this.width,null!=n?n:this.height)}putImageData(...t){return this.context.putImageData(...t),this}fill(t){return this.context.fill(t),this}addText(t,e,r,n){return this.context.fillText(t,e,r,n),this}addResponsiveText(t,e,r,n){var s;const[,i="",a,o]=null!==(s=/(\w+ )?(\d+)(.+)/.exec(this.context.font))&&void 0!==s?s:[],h=parseInt(a,10),{width:c}=this.measureText(t),l=n>c?h:n/c*h;return this.setTextFont(`${i}${l}${o}`).addText(t,e,r)}addMultilineText(t,e,r){const n=t.split(/\r?\n/);if(n.length<=1)return this.addText(t,e,r);const s=this.textFontHeight;let i=r;for(const t of n)this.addText(t,e,Math.floor(i)),i+=s;return this}addWrappedText(t,e,r,n){const s=i(this,t,n);return this.addMultilineText(s,e,r)}stroke(){return this.context.stroke(),this}addStrokeRect(t,e,r,n){return this.context.strokeRect(t,e,r,n),this}addStrokeText(t,e,r,n){return this.context.strokeText(t,e,r,n),this}measureText(t,e){if(e){if("function"!=typeof e)throw new TypeError("Callback must be a function.");return e.call(this,this.context.measureText(t),this),this}return this.context.measureText(t)}setTextSize(t){var e;const[,r="",n]=null!==(e=/(\w+ )?(?:\d+)(.+)/.exec(this.context.font))&&void 0!==e?e:[];return this.setTextFont(`${r}${t}${n}`)}setStroke(t){return this.context.strokeStyle=t,this}setLineWidth(t){return this.context.lineWidth=t,this}setStrokeWidth(t){return this.setLineWidth(t)}setLineDashOffset(t){return this.context.lineDashOffset=t,this}setLineJoin(t){return this.context.lineJoin=t,this}setLineCap(t){return this.context.lineCap=t,this}setLineDash(t){return this.context.setLineDash(t),this}printImage(t,...e){return a.resolveImage(t,t=>this.context.drawImage(t,...e)),this}printCircularImage(t,e,r,n,s,i){return this.save().createRoundClip(e,r,i,0,2*Math.PI,!1).printImage(t,e-i,r-i,n,s).restore()}printRoundedImage(t,e,r,n,s,i){return this.save().createBeveledClip(e,r,n,s,i).printImage(t,e,r,n,s).restore()}addCircle(t,e,r){return this.save().createRoundPath(t,e,r).fill().restore()}printRectangle(t,e,r,n){return this.context.fillRect(t,e,r,n),this}printRoundedRectangle(t,e,r,n,s){return this.save().createBeveledPath(t,e,r,n,s).fill().restore()}createRoundPath(t,e,r,n=0,s=2*Math.PI,i=!1){return this.context.beginPath(),this.context.arc(t,e,r,n,s,i),this}createRoundClip(t,e,r,n,s,i){return this.createRoundPath(t,e,r,n,s,i).clip()}createRectanglePath(t,e,r,n){return this.context.rect(t,e,r,n),this}createRectangleClip(t,e,r,n){return this.createRectanglePath(t,e,r,n).clip()}createBeveledPath(t,e,r,n,s){if(r>0&&n>0){let i=void 0;"number"==typeof s?i={tl:s=Math.min(s,r/2,n/2),tr:s,br:s,bl:s}:(i=s,s=Math.min(5,r/2,n/2));const{tl:a=s,tr:o=s,br:h=s,bl:c=s}=i;this.context.beginPath(),this.context.moveTo(t+a,e),this.context.lineTo(t+r-o,e),this.context.quadraticCurveTo(t+r,e,t+r,e+o),this.context.lineTo(t+r,e+n-h),this.context.quadraticCurveTo(t+r,e+n,t+r-h,e+n),this.context.lineTo(t+c,e+n),this.context.quadraticCurveTo(t,e+n,t,e+n-c),this.context.lineTo(t,e+a),this.context.quadraticCurveTo(t,e,t+a,e),this.context.closePath()}return this}createBeveledClip(t,e,r,n,s){return this.createBeveledPath(t,e,r,n,s).clip()}setColor(t){return this.context.fillStyle=t,this}setTextFont(t){return this.context.font=t,this}setTextAlign(t){return this.context.textAlign=t,this}setTextBaseline(t){return this.context.textBaseline=t,this}beginPath(){return this.context.beginPath(),this}closePath(){return this.context.closePath(),this}createPattern(t,e,r){return a.resolveImage(t,t=>r.call(this,this.context.createPattern(t,e),this)),this}printPattern(t,e){return this.createPattern(t,e,t=>this.setColor(t))}createLinearGradient(t,e,r,n,s=[]){const i=this.context.createLinearGradient(t,e,r,n);for(const t of s)i.addColorStop(t.position,t.color);return i}printLinearColorGradient(t,e,r,n,s){const i=this.createLinearGradient(t,e,r,n,s);return this.setColor(i)}printLinearStrokeGradient(t,e,r,n,s){const i=this.createLinearGradient(t,e,r,n,s);return this.setStroke(i)}createRadialGradient(t,e,r,n,s,i,a=[]){const o=this.context.createRadialGradient(t,e,r,n,s,i);for(const t of a)o.addColorStop(t.position,t.color);return o}printRadialColorGradient(t,e,r,n,s,i,a){const o=this.createRadialGradient(t,e,r,n,s,i,a);return this.setColor(o)}printRadialStrokeGradient(t,e,r,n,s,i,a){const o=this.createRadialGradient(t,e,r,n,s,i,a);return this.setStroke(o)}createEllipse(t,e,r,n,s,i,a,o){return this.context.ellipse(t,e,r,n,s,i,a,o),this}arc(t,e,r,n,s,i){return this.context.arc(t,e,r,n,s,i),this}arcTo(t,e,r,n,s){return this.context.arcTo(t,e,r,n,s),this}quadraticCurveTo(t,e,r,n){return this.context.quadraticCurveTo(t,e,r,n),this}bezierCurveTo(t,e,r,n,s,i){return this.context.bezierCurveTo(t,e,r,n,s,i),this}lineTo(t,e){return this.context.lineTo(t,e),this}moveTo(t,e){return this.context.moveTo(t,e),this}setShadowBlur(t){return this.context.shadowBlur=t,this}setShadowColor(t){return this.context.shadowColor=t,this}setShadowOffsetX(t){return this.context.shadowOffsetX=t,this}setShadowOffsetY(t){return this.context.shadowOffsetY=t,this}setMiterLimit(t){return this.context.miterLimit=t,this}setPatternQuality(t){return this.context.patternQuality=t,this}setTextDrawingMode(t){return this.context.textDrawingMode=t,this}setAntialiasing(t){return this.context.antialias=t,this}setGlobalCompositeOperation(t){return this.context.globalCompositeOperation=t,this}setGlobalAlpha(t){return this.context.globalAlpha=t,this}resetShadows(){return this.setShadowBlur(0).setShadowOffsetX(0).setShadowOffsetY(0).setShadowColor("transparent")}clearCircle(t,e,r,n=0,s=2*Math.PI,i=!1){return this.createRoundClip(t,e,r,n,s,i).clearRectangle(t-r,e-r,2*r,2*r)}clearRectangle(t=0,e=0,r=this.width,n=this.height){return this.context.clearRect(t,e,r,n),this}getLineDash(){return this.context.getLineDash()}get lineDash(){return this.getLineDash()}isPointInPath(t,e,r){return this.context.isPointInPath(t,e,r)}isPointInStroke(t,e){return this.context.isPointInStroke(t,e)}process(t,...e){return t.call(this,this,...e),this}toBuffer(...t){return this.canvas.toBuffer(...t)}toBufferAsync(...t){return new Promise((e,r)=>this.canvas.toBuffer((t,n)=>{t?r(t):e(n)},...t))}toDataURL(...t){return this.canvas.toDataURL(...t)}toDataURLAsync(...t){return new Promise((e,r)=>this.canvas.toDataURL(...t,(t,n)=>{t?r(t):e(n)}))}toBlob(t,e,r){return this.windowCanvas.toBlob(t,e,r)}toBlobAsync(t,e){return new Promise(r=>this.windowCanvas.toBlob(r,t,e))}wrapText(t,e,r){const n=i(this,t,e);if(r){if("function"!=typeof r)throw new TypeError("Callback must be a function");return r.call(this,n,this),this}return n}static resolveImage(t,r){if(t instanceof Uint8Array){const n=new e.Image;return n.onload=r.bind(this,n),n.src=t,n}return r(t),t}static from(t){const e=new a(t.width,t.height);return e.canvas=t,e.context=t.getContext("2d"),e}}const o=t=>{const e=t.getImageData(),{data:r}=e;for(let t=0;t<r.length;t+=4){const e=.2126*r[t]+.7152*r[t+1]+.0722*r[t+2];r[t]=e,r[t+1]=e,r[t+2]=e}return t.putImageData(e,0,0)},h=o,c=t=>{const e=t.getImageData(),{data:r}=e;for(let t=0;t<r.length;t+=4){const e=255-(.2126*r[t]+.7152*r[t+1]+.0722*r[t+2]);r[t]=e,r[t+1]=e,r[t+2]=e}return t.putImageData(e,0,0)},l=c,u=(t,e)=>{const r=t.getImageData(),{data:n}=r;for(let t=0;t<n.length;t+=4)n[t]-=e,n[t+1]-=e,n[t+2]-=e;return t.putImageData(r,0,0)},d=u,g=(t,e,r=!0)=>{const n=Math.round(Math.sqrt(e.length)),s=Math.floor(n/2),i=t.getImageData(),a=i.data,o=i.width,h=i.height,c=o,l=h,u=t.getImageData(),d=u.data,g=r?1:0;for(let t=0;t<l;t++)for(let r=0;r<c;r++){const i=t,l=r,u=4*(t*c+r);let x=0,f=0,p=0,m=0;for(let t=0;t<n;t++)for(let r=0;r<n;r++){const c=i+t-s,u=l+r-s;if(c>=0&&c<h&&u>=0&&u<o){const s=4*(c*o+u),i=e[t*n+r];x+=a[s]*i,f+=a[s+1]*i,p+=a[s+2]*i,m+=a[s+3]*i}}d[u]=x,d[u+1]=f,d[u+2]=p,d[u+3]=m+g*(255-m)}return t.putImageData(u,0,0)},x=[0,-1,0,-1,4,-1,0,-1,0],f=[0,-1,0,-1,5,-1,0,-1,0],p=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9];t.Canvas=a,t.blur=(t,e=1)=>{for(let r=0;r<e;++r)g(t,p,!0);return t},t.brightness=(t,e)=>{const r=t.getImageData(),{data:n}=r;for(let t=0;t<n.length;t+=4)n[t]+=e,n[t+1]+=e,n[t+2]+=e;return t.putImageData(r,0,0)},t.convolute=g,t.darkness=u,t.edge=t=>g(t,x,!0),t.grayscale=h,t.greyscale=o,t.invert=t=>t.save().setGlobalCompositeOperation("difference").setColor("white").printRectangle(0,0,t.width,t.height).restore(),t.invertGrayscale=c,t.invertGreyscale=l,t.invertedThreshold=(t,e)=>{const r=t.getImageData(),{data:n}=r;for(let t=0;t<n.length;t+=4){const r=.2126*n[t]+.7152*n[t+1]+.0722*n[t+2]>=e?0:255;n[t]=r,n[t+1]=r,n[t+2]=r}return t.putImageData(r,0,0)},t.myOldFriend=d,t.sepia=t=>{const e=t.getImageData(),{data:r}=e;for(let t=0;t<r.length;t+=4){const e=r[t],n=r[t+1],s=r[t+2];r[t]=.393*e+.769*n+.189*s,r[t+1]=.349*e+.686*n+.168*s,r[t+2]=.272*e+.534*n+.131*s}return t.putImageData(e,0,0)},t.sharpen=(t,e=1)=>{for(let r=0;r<e;++r)g(t,f,!0);return t},t.silhouette=t=>{const e=t.getImageData(),{data:r}=e;for(let t=0;t<r.length;t+=4)r[t]=0,r[t+1]=0,r[t+2]=0;return t.putImageData(e,0,0)},t.threshold=(t,e)=>{const r=t.getImageData(),{data:n}=r;for(let t=0;t<n.length;t+=4){const r=.2126*n[t]+.7152*n[t+1]+.0722*n[t+2]>=e?255:0;n[t]=r,n[t+1]=r,n[t+2]=r}return t.putImageData(r,0,0)},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map