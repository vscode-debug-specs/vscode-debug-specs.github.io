<?php

function bubble_sort($input){
	for($i=0;$i<count($input);$i++){
		for($j=0;$j<count($input)-1-$i;$j++){
			if($input[$j] > $input[$j+1]){
				$tmp = $input[$j];
				$input[$j] = $input[$j+1];
				$input[$j+1] = $tmp;
			}
		}
	}
	return $input;
}

$input_text="4 3 2 1";
$output_text="";
if( array_key_exists("input",$_GET) ){
	$input_text = $_GET["input"];
	$input = explode(" ",$input_text);
	for($i=0;$i<count($input);$i++){
		$input[$i] = (int)$input[$i];
	}
	$output = bubble_sort($input);
	for($i=0;$i<count($output);$i++){
		$output_text .= "$output[$i] ";
	}
}

?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Bubble Sort</title>
</head>
<body>
<form action="bubble_sort.php" method="get">
	<input type="text" name="input" size="50" value="<?php print($input_text); ?>"/>
	<input type="submit" value="sort"/>
</form>
<div><?php print($output_text); ?></div>
</body>
</html>