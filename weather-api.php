<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Mayu Kida.com</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

    <!-- Custom CSS -->
    <link href="css/weather-api.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Quicksand:400,700,300|Clicker+Script|Alegreya+Sans+SC:400,500' rel='stylesheet' type='text/css'>


<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#ffffff">
</head>



<body>

            <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container container-contact">
            <div class="row">
                <div class="col-lg-12 title">
                    <h1 id="weather-title">Mayu Kida</h1>
                    <span id="fed">FRONT END DEVELOPER</span>
                </div>
            </div>
            <div class="row">
                <!-- Contact Form -->
                <div class="col-sm-12 col-md-6">
                    <div id="weather-message"></div>
                </div>
                <div class="col-sm-12 col-md-6" id="form">
                    <form class="form-horizontal" method="post" action="form.php">
                      <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
                        <div class="col-sm-12">
                          <input type="text" class="form-control" name="yourname" placeholder="Name">
                        </div>
                      </div>              <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-12">
                          <input type="email" class="form-control" name="youremail" placeholder="Email">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">Message</label>
                        <div class="col-sm-12">
                          <textarea class="form-control" name="yourcomment" placeholder="Message me!" rows="4"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-9" id="form-btn">
                          <a href="form.php">
                            <button type="submit" name="submit" class="btn btn-default">Send</button>
                          </a>
                        </div>
                      </div>
                    </form>
                </div>
<!--                 <div class="col-xs-12 col-md-6" id="myemail">
                        <p><a href="mailto:info@mayukida.com">info@mayukida.com</a></p>
                </div> -->
                   <!-- End of Contact Form -->
                <!-- <div class="col-xs-12" id="weather-img"></div> -->
            </div>
<!--             <div class="row">
                <div class="col-lg-12">
                    <p id="copyright">&copy; 2016 Mayu Kida</p>
                </div>
            </div> -->

        </div>
        
        <div class="clear"></div>
        
    </section>

    <footer id="copyright">
            <p id="copy-name">&copy; <?php echo date("Y"); ?> Mayu Kida</p>
    </footer>



    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <!-- Custom JavaScript -->
    <script type="text/javascript" src="js/weather_gif.js"></script>



</body>

</html>
