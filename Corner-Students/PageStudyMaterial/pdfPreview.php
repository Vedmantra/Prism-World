<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <!-- Enable pinch zooming on mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
    <title>Secure PDF Viewer</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.3.200/pdf.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100%;
            overflow: auto;
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
            margin-top: 10vh;
            padding: 2rem 0;
            min-height: 90vh;
            width: 100%;
            overflow: auto;
        }

        #pdfViewer {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding-bottom: 4rem; /* for space below last page */
        }

        .pdf-page-canvas {
            display: block;
        }

        #zoomControls {
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        #zoomControls button {
            font-size: 1.5rem;
            padding: 0.5rem 0.8rem;
            border: none;
            background: black;
            color: white;
            border-radius: 6px;
            cursor: pointer;
        }

        #zoomControls button:hover {
            background: #333;
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

    <!-- Zoom Controls -->
    <div id="zoomControls">
        <button onclick="zoomIn()">➕</button>
        <button onclick="zoomOut()">➖</button>
    </div>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const pdfUrl = urlParams.get('pdfUrl');

        let currentScale = 1;

        function loadPDF() {
            const viewer = document.getElementById('pdfViewer');
            viewer.innerHTML = '';

            const container = document.getElementById('pdfContainer');
            const containerWidth = container.clientWidth;

            pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
                const renderPages = [];

                for (let i = 1; i <= pdf.numPages; i++) {
                    renderPages.push(
                        pdf.getPage(i).then(page => {
                            const unscaledViewport = page.getViewport({ scale: 1 });
                            const scale = (containerWidth / unscaledViewport.width) * currentScale;
                            const viewport = page.getViewport({ scale });

                            const outputScale = window.devicePixelRatio || 1;

                            const canvas = document.createElement('canvas');
                            canvas.className = 'pdf-page-canvas';
                            canvas.width = viewport.width * outputScale;
                            canvas.height = viewport.height * outputScale;
                            canvas.style.width = `${viewport.width}px`;
                            canvas.style.height = `${viewport.height}px`;

                            const context = canvas.getContext('2d');
                            context.setTransform(outputScale, 0, 0, outputScale, 0, 0);

                            return page.render({
                                canvasContext: context,
                                viewport: viewport
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

        function zoomIn() {
            currentScale = Math.min(currentScale + 0.2, 5);
            loadPDF();
        }

        function zoomOut() {
            currentScale = Math.max(0.4, currentScale - 0.2);
            loadPDF();
        }

        document.addEventListener("contextmenu", e => e.preventDefault());

        loadPDF();
    </script>
</body>

</html>
