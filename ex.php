<?php
if (isset($_POST['submit']) )
{
     
  if (!empty($keyword))
  {

    $apikey = 'AIzaSyDdi8y1wCTzDGzluQ3rEEYlg5qrFZ00ttU'; 
    $googleApiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' . $keyword . '&maxResults=' . MAX_RESULTS . '&key=' . $apikey;

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $googleApiUrl);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_VERBOSE, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);

    curl_close($ch);
    $data = json_decode($response);
    $value = json_decode(json_encode($data), true);
?>

<div class="result-heading">About <?php echo MAX_RESULTS; ?> Results</div>
<div class="videos-data-container" id="SearchResultsDiv">

<?php
    for ($i = 0; $i < MAX_RESULTS; $i++) {
        $videoId = $value['items'][$i]['id']['videoId'];
        $title = $value['items'][$i]['snippet']['title'];
        $description = $value['items'][$i]['snippet']['description'];
        ?> 
    
<div class="video-tile">
<div  class="videoDiv">
    <iframe id="iframe" style="width:100%;height:100%" src="//www.youtube.com/embed/<?php echo $videoId; ?>" 
data-autoplay-src="//www.youtube.com/embed/<?php echo $videoId; ?>?autoplay=1"></iframe>         
</div>
<div class="videoInfo">
<div class="videoTitle"><b><?php echo $title; ?></b></div>
<div class="videoDesc"><?php echo $description; ?></div>
</div>
</div>
           <?php 
        }
    } 
           
}
?> 



<?php
    if (isset($_POST['submit']) )
     {
        $keyword = $_POST['keyword'];
               
        if (empty($keyword))
        {
            $response = array(
                  "type" => "error",
                  "message" => "Please enter the keyword."
                );
        } 
    }
         
?>
<h2>Search Videos by keyword using YouTube Data API V3</h2>
<div class="search-form-container">
    <form id="keywordForm" method="post" action="">
        <div class="input-row">
            Search Keyword : <input class="input-field" type="search"
                id="keyword" name="keyword"
                placeholder="Enter Search Keyword">
        </div>

        <input class="btn-submit" type="submit" name="submit"
            value="Search">
    </form>
</div>

<?php 
if(!empty($response)) { 
?>
<div class="response <?php echo $response["type"]; ?>
    ">
    <?php echo $response["message"]; ?>
</div>
<?php 
}
?>