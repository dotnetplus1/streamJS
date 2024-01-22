
        const videoElem = document.getElementById("video");
        const startElem = document.getElementById("start");
        const stopElem = document.getElementById("stop");
        const videoDiv = document.getElementById("video-div");
        // Options pour la fonction displayMedia() //
        var displayMediaOptions = {
            video: {
                cursor: "always",
                height: 1000,
                width: 1200
            },
            audio: false
        };
        // ecouteurs d'evenement su rles bouttons partage et stop
        startElem.addEventListener("click", function (evt) {
            
            startCapture();
        }, false);
        stopElem.addEventListener("click", function (evt) {
            stopCapture();
        }, false);



        // fonction denregistrement d'ecran
        async function startCapture() {
            try {

                
                videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
                
                videoDiv.style.display = "block";
            } catch (err) {
                console.error("Error: " + err);
            }
        }


        // fonction darret du partage decran
        function stopCapture(evt) {
            let tracks = videoElem.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            videoElem.srcObject = null;
        }

      
