package main

import "fmt"

func main() {
	var v string

	fmt.Printf("Pilih soal ujian antara soal 1, soal 2, dan soal 3: ")
	fmt.Scanln(&v)
	switch v {
	case "1":
		ujian1()
	case "2":
		ujian2()
	case "3":
		ujian3()
	default:
		fmt.Println("Try Again!")
	}
}
func ujian1 () {
	var angka int
	fmt.Printf("Input 6 angkanya: ")
	fmt.Scan(&angka) 

	first := angka / 10000
	second := angka / 1000 % 10
	third := angka / 100 % 10
	forth := angka % 100

	fmt.Printf("%d%d%d%d", first, third, second, forth)
}
func ujian2 () {
	var nomor int
	var kelipatan bool
	fmt.Printf("Input angkanya: ")
	fmt.Scan(&nomor) 

	for i := 6 ; i <= nomor ; i-- {
		nomor = 0
		kelipatan = true
	}
	fmt.Print(kelipatan)
}
func ujian3 () {
	var satu int
	hasil := 1
	fmt.Printf("angka-angkanya: ")
	fmt.Scan(&satu)

	if satu > 1 {
		hasil += 2 
		fmt.Print(hasil)
	} else {
		hasil1 := 1
		fmt.Print(hasil1)
	}
}