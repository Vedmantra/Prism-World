<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <title>Secure PDF Viewer</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.3.200/pdf.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        nav {
            height: 10vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 2rem;
            position: fixed;
            top: 0;
            width: 100%;
            background: white;
            z-index: 10;
        }

        nav .right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        nav .right a {
            text-decoration: none;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-size: 1.3rem;
        }

        nav .left {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        nav img {
            height: 80%;
        }

        @media (max-width:700px) {

            nav {
                padding: 0 1rem;
            }

            nav .left img {
                height: 50%;
            }

            nav .right {
                gap: 0.8rem;
            }

        }

        #pdfContainer {

            max-height: 90vh;
            /* overflow-y: auto; */
            width: 60%;
            margin: auto;
            padding-top: 5rem;
        }

        .pdf-page-canvas {
            width: 100%;
            height: auto;
            display: block;
            /* margin: 10px auto; */
        }

        @media (max-width:700px) {
            #pdfContainer {
                max-height: 90vh;
                width: 100%;
                margin: auto;
            }
        }
    </style>
</head>

<body>

    <nav>
        <div class="left">
            <img src="../../Assets/Logo/big.png" alt="">
        </div>
        <div class="right">
            <h2><a href="./showpdfs.php">Home</a></h2>
        </div>
    </nav>

    <div id="pdfContainer">
        <div id="pdfViewer"></div>
    </div>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const pdfUrl = urlParams.get('pdfUrl');
        loadPDF()
        function loadPDF() {
            const viewer = document.getElementById('pdfViewer');
            viewer.innerHTML = '';

            const containerWidth = document.getElementById('pdfContainer').clientWidth;

            pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
                const renderPages = [];
                for (let i = 1; i <= pdf.numPages; i++) {
                    renderPages.push(
                        pdf.getPage(i).then(page => {
                            const viewport = page.getViewport({ scale: 1 });
                            const scale = containerWidth / viewport.width;
                            const scaledViewport = page.getViewport({ scale });

                            const outputScale = window.devicePixelRatio || 1;

                            const canvas = document.createElement('canvas');
                            canvas.className = 'pdf-page-canvas';
                            canvas.width = scaledViewport.width * outputScale;
                            canvas.height = scaledViewport.height * outputScale;
                            canvas.style.width = `${scaledViewport.width}px`;
                            canvas.style.height = `${scaledViewport.height}px`;

                            const context = canvas.getContext('2d');
                            context.setTransform(outputScale, 0, 0, outputScale, 0, 0);

                            return page.render({
                                canvasContext: context,
                                viewport: scaledViewport
                            }).promise.then(() => {
                                canvas.addEventListener("contextmenu", e => e.preventDefault());
                                return canvas;
                            });
                        })
                    );
                }

                Promise.all(renderPages).then(canvases => {
                    canvases.forEach(canvas => viewer.appendChild(canvas));
                });
            });
        }

        document.addEventListener("contextmenu", e => e.preventDefault());
    </script>
</body>

</html>