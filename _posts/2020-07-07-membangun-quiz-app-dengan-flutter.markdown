---
layout: post
title:  "Membangun Quiz App dengan Flutter"
date:   2020-07-07 19:25:54 +0700
categories: dart flutter
---
![Quiz App](https://jennndol.github.io/assets/images/flutter-quiz.jpg)

Kuis adalah padanan kata atau sinonim untuk permainan teka-teki, yang biasanya berhadiah. Pada umumnya, kuis  dikenal melalui acara televisi yang disiarkan secara rutin setiap pekan  atau setiap hari.

Sesuai dengan judul, kita akan membangun aplikasi kuis kita sendiri dengan menggunakan **Flutter**. Aplikasi ini dibangun dengan memanfaatkan contoh simpel penggunaan state dalam **Flutter**. Menampilkan pertanyaan, menyimpan jawaban, dan menampilkan hasil di akhir kuis. Hmmm, tunggu apa lagi, mulai kuy.

Pembangunan aplikasi ini dibagi dalam 4 bagian, diantaranya adalah:

1. **Membuat Projek Flutter**
2. **Set-up Depedensi**
3. **Membangun UI**
4. **Menambahkan Fungsionalitas**

Untuk membuat aplikasi kuis ini kita membutuhkan [Flutter SDK](https://flutter.dev/docs/get-started/install) terinstall di komputer kita, jika belum kita bisa install terlebih dahulu.

### Membuat projek Flutter

Membuat projek baru di **Flutter** cukup mudah, dengan memanfaatkan command line interface atau CLI, cukup dengan ketikan `> flutter new my_quiz` bimsalabim boilerplate **Flutter** siap digunakan.

### Set-up Depedensi

Disamping depedensi yang di set secara default pada Flutter boilerplate, kita membutuhkan depedensi sweetAlert untuk menampilkan hasil kuis. Tambahkan package sweetAlert pada file `pubspec.yaml`.

```yaml
name: my_quiz
...
dependencies:
	...
  sweetalert: ^0.0.1
```

Kemudian install depedensi tersebut dengan mengetikan `> flutter pub get` pada command line.

### Membangun UI

Tentunya kita membutuhkan user interface atau UI, agar aplikasi kuis yang kita bangun bisa terlihat penampakannya. Di tahap ini, buka file `lib/main.dart` dan ubah semua baris kode di file tersebut dengan baris kode berikut.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kuiiz',
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: MyQuiz(),
          ),
        ),
      ),
    );
  }
}

class MyQuiz extends StatefulWidget {
  @override
  _MyQuizState createState() => _MyQuizState();
}

class _MyQuizState extends State<MyQuiz> {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: Text(
                'Everest adallah gunung tertinggi di dunia.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'Benar',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {},
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'Salah',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                setState(() {});
              },
            ),
          ),
        ),
      ],
    );
  }
}

```

Jalankan projek flutter kita untuk memastikan apakah UI yang kita buat berhasil. Gimana, **UI** kita berhasil tampil?. Eits, jangan stop disini, aplikasi kuis kita belum berfungsi sebagai mana mestinya karena baru hanya sebatas menampilkan halaman statis aplikasi kuis kita.

### Menambahkan Fungsionalitas

Yeaaaay, selangkah lagi agar aplikasi kuis kita bisa dipakai, yaitu menambahkan fungsionalitas pada UI kita.

1. #### Menampilkan pertanyaan

   Tambahkan state variables berikut pada class `_MyQuizState`. `questions` untuk menampung list pertanyaan, `answers` untuk menampung list jawaban, `index` untuk menampung `index` atau posisi pertanyaan, dan `rightCount` untuk menampung jawaban benar aplikasi kuis kita.

   ```dart
   class _MyQuizState extends State<MyQuiz> {
     List<String> questions = [
       'Everest adallah gunung tertinggi di dunia.',
       'Tom adalah nama kucing dalam film Tom and Jerry.',
       'Slum Dog Millionaire dibintangi oleh Shah Rukh Khan.'
     ];
     List<bool> answers = [true, true, false];
     int index = 0;
     int rightCount = 0;
     ...
   ```

   Selanjutnya masih di class yang sama tampilkan pertanyaan kita dengan mengubah kode berikut

   ```dart
   @override
     Widget build(BuildContext context) {
       return Column(
       	...
                 child: Text(
                   'Everest adallah gunung tertinggi di dunia.',
                   ...
                   ),
                 ),
               ),
             ),
           ),
   ```

   Ubah value pada widget **Text** menjadi

   ```dart
   @override
     Widget build(BuildContext context) {
       return Column(
       	...
                 child: Text(
                   questions[index],
                   ...
                   ),
                 ),
               ),
             ),
           ),
   ```

   

2. #### Mengganti pertanyaan

   Rasanya bukan kuis namanya kalo pertanyaannya itu-itu aja, pada bagian ini kita akan mengganti pertanyaan dengan mengubah state `index` di aplikasi kuis kita di setiap user klik tombol **Benar** atau **Salah**.

   Tambahkan method `nextQuestion` untuk mengganti state `index` pada class `_MyQuizState`.

   ```dart
   class _MyQuizState extends State<MyQuiz> {
     ...
   
     void nextQuestion() {
       setState(() {
         if (index < questions.length - 1) {
           index++;
         }
       });
     }
   ```

   Panggil method tersebut pada action `onPressed` widget `FlatButton` **Benar** dan **Salah**.

   ```dart
   @override
     Widget build(BuildContext context) {
       return Column(
         ...
           Expanded(
             child: Padding(
               padding: EdgeInsets.all(15.0),
               child: FlatButton(
                 ...
                 child: Text(
                   'Benar',
                   ...
                 ),
                 onPressed: () {
                   nextQuestion();
                 },
               ),
             ),
           ),
           Expanded(
             child: Padding(
               padding: EdgeInsets.all(15.0),
               child: FlatButton(
                 ...
                 child: Text(
                   'Salah',
                   ...
                 ),
                 onPressed: () {
                   nextQuestion();
                 },
               ),
             ),
           ),
     		...
   ```

   Jika dijalankan, maka aplikasi kuis kita sudah bisa mengganti pertanyaan ketika tombol **Benar** tau **Salah** di klik.

3. #### Mencatat jumlah jawaban benar

   Selanjutnya kita akan mencatat berapa pertanyaan yang berhasil ditebak dengan jawaban yang benar.  State `rightCount` sengaja kita buat untuk menyimpan.

   ```dart
   class _MyQuizState extends State<MyQuiz> {
     ...
   
     void checkAnswer(bool clickedAnswer) {
       bool correctAnswer = answers[index];
       if (clickedAnswer == correctAnswer) {
         rightCount++;
       }
       print(clickedAnswer == correctAnswer);
     }
   ```

   Tambahkan pada action onPressed widget `FlatButton` **Benar** dan **Salah**.

   ```dart
   @override
     Widget build(BuildContext context) {
       return Column(
         ...
                 onPressed: () {
                   checkAnswer(true);
                   nextQuestion();
                 },
               ),
             ),
           ),
       	...
                 onPressed: () {
                   checkAnswer(false);
                   nextQuestion();
                 },
               ),
             ),
           ),
     		...
   ```

   Jika dijalankan, maka aplikasi kuis kita sudah bisa mengganti pertanyaan ketika tombol **Benar** tau **Salah** di klik.

4. #### Menampilkan Hasil Kuis

   Tiba sudah pada tahap terakhir pembangun aplikasi kuis kita. Agar terlihat lebih menarik, pada tahap ini kita akan menampilkan hasil aplikasi kuis kita dengan menggunakan package `sweetAlert`. `sweetAlert` adalah salah satu package populer untuk menampilkan alert atau pengumuman dengan style yang menarik, dan tersedia juga untuk **NodeJS**. 

   Tambahkan method-method berikut pada class `_MyQuizState`. `showAlert` digunakan untuk menampilkan alert dan `restartApp` digunakan untuk membuat state seperti awal aplikasi kuis dibuka.

   ```dart
   class _MyQuizState extends State<MyQuiz> {
     ...
   
     void showAlert() {
       SweetAlert.show(context,
           title: "You got $rightCount right from ${questions.length} questions",
           subtitle: "Thank you for playing this quiz app",
           style: SweetAlertStyle.success);
     }
     
     void restartApp() {
       setState(() {
         index = 0;
         rightCount = 0;
       });
     }
   ```

   Modifikasi method `nextQuestion` untuk memanggil method-method yang kita buat baru saja.

   ```dart
   void nextQuestion() {
       setState(() {
         if (index < questions.length - 1) {
           index++;
         } else {
           showAlert();
           restartApp();
         }
       });
     }
   ```

   Dan taraaaaa, semua fungsionalitas aplikasi kuis kita berhasil dibuat.

   ![Quiz App](https://jennndol.github.io/assets/images/final-my-kuis.png)

   Terimakasih sudah membaca, semoga bermanfaat 🙏.

[]: 

