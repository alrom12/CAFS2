<?php

$br = "<br>";
echo square(6) . $br;
echo sum(1, 2) . $br;
echo calculate(3, 6, 3) . $br;
echo getDayNameLT(0) . $br;

function square(int $number) {
    return pow($number, 2);
}

function sum(int $number1, int $number2) {
    return $number1 + $number2;
}

function calculate(int $number1, int $number2, int $number3) {
    return ($number2 - $number1) / $number3;
}

function getDayNameLT(int $dayNumber) {
    $days = [
        'Pirmadienis',
        'Antradienis',
        'Trečiadienis',
        'Ketvirtadienis',
        'Penktadienis',
        'Šeštadienis',
        'Sekmadienis',
        'Nežinomas dienos numeris'
    ];
    if ($dayNumber >= 1 && $dayNumber <= 7) {
        return $days[$dayNumber - 1];
    }
    return $days[7];
}
?>