<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../../../Assets/Logo/small.png">
    <title>Study Material Homepage</title>
    <link rel="stylesheet" href="showpdfs.css">
    <link rel="stylesheet" href="../../../css/global.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.3.200/pdf.js"></script>
</head>

<body>

    <nav>
        <div class="left">
            <img src="../../../Assets/Logo/big.png" alt="">
        </div>
        <div class="right">
            <a href="../students.html">Home</a>
        </div>
    </nav>

    <section class="inputs">
        <!-- <h1 class="title">Get Your Study Material</h1> -->
        <div class="container">

            <div class="standardDiv">
                <div class="div1">
                    <h2>Select Standard</h2>
                </div>
                <div class="div2">
                    <input type="range" name="" id="standardInput" min="1" max="100" value="0">
                </div>
            </div>

            <div class="mediumDiv">
                <div class="div1">
                    <h2>Select Medium</h2>
                </div>
                <div class="div2">
                    <input type="range" name="" id="mediumInput" min="1" max="100" value="0">
                </div>
            </div>

            <div class="div">

                <div class="paperTypeDiv">
                    <select class="paperTypeDropdown">
                        <option value="default" selected disabled>Select Type</option>
                        <option value="Unit Test">Unit Test</option>
                        <option value="Sem">Semester Exam</option>
                        <option value="Class Test">Class Test</option>
                        <option value="Solution">Solution</option>
                    </select>
                </div>

                <div class="subjectDiv">
                    <select class="subjectDropdown1">
                        <option value="default" selected disabled>Subject</option>
                        <div class="abra">
                            <option value="Marathi">Marathi</option>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                        </div>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                        <option value="Geography">Geography</option>
                    </select>
                    <select class="subjectDropdown2">
                        <option value="default" selected disabled>Subject</option>
                        <div class="abra">
                            <option value="Marathi">Marathi</option>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                        </div>
                        <option value="Maths 1">Maths 1</option>
                        <option value="Maths 2">Maths 2</option>
                        <option value="Science 1">Science 1</option>
                        <option value="Science 2">Science 2</option>
                        <option value="History">History</option>
                        <option value="Geography">Geography</option>
                    </select>
                </div>

            </div>

            <div class="searchBarDiv">
                <input type="search" placeholder="Search Your Study Material">
            </div>

        </div>

    </section>

    <section class="pdfSection">
    </section>

    <?php
    $mainPdfFolder = 'Pdfs';
    $allPdfsNamesArray = [];

    $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($mainPdfFolder));

    foreach ($iterator as $file) {
        if ($file->isFile() && strtolower($file->getExtension()) === 'pdf') {
            $allPdfsNamesArray[] = str_replace("\\", "/", $file->getPathname());
        }
    }

    echo "<script>const allPdfsNamesArray = " . json_encode($allPdfsNamesArray) . ";</script>";

    ?>

    <script src="showpdfs.js"></script>
</body>

</html>