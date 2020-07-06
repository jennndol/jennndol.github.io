---
layout: post
title:  "Konfigurasi Google Maps Flutter"
date:   2020-07-06 17:00:54 +0700
categories: dart flutter
---
![Google Maps](https://jennndol.github.io/assets/images/google-maps2-fade-ss-1920.jpg)

Pada tulisan ini kita akan mengkonfigurasikan **Flutter** dengan **Google Maps**.

Dewasa ini banyak sekali aplikasi yang memanfaatkan peta, beberapa diantaranya mungkin sering sekali kita pakai dan tentunya sangat memanjakan hidup kita. Beberapa maps libraries meramaikan dunia software development untuk pemanfaatan peta ini, dan satu yang paling populer adalah **Google Maps**. Dan disamping itu **Flutter** menjadi salah satu yang paling diminati untuk membuat aplikasi mobile, cukup dengan satu kali menulis baris kode.

## Pengenalan Google Maps dan Flutter

**Google Maps** adalah layanan pemetaan web yang dikembangkan oleh **Google**. Layanan ini memberikan citra satelit, peta jalan, panorama 360°,  kondisi lalu lintas, dan perencanaan rute untuk bepergian dengan  berjalan kaki, mobil, atau angkutan umum.

**Flutter** adalah UI toolkit buatan Google untuk membangun aplikasi yang natively compiled untuk [mobile](https://flutter.dev/docs), [web](https://flutter.dev/web), dan [desktop](https://flutter.dev/desktop) dari satu basis code. **Flutter** membuat aplikasi bisa berjalan dalam dua operating system sekaligus.

## Langkah - Langkah

* ### Buat API Key untuk Google Maps

  Hal yang paling utama adalah membuat API Key, kita bisa membuatnya dengan mengunjungi halaman [Maps Platform](https://cloud.google.com/maps-platform/).

  ![Google Maps API Keys](https://jennndol.github.io/assets/images/api-key-generation.png)

* ### Aktifkan Google Maps SDK

  Pastikan Google Maps SDK aktif untuk Operating System yang kita pilih, untuk poin ini kita bisa aktifasi untuk Maps SDK Android dan IOS.

* ### Set Dependensi

  Tambahkan [google_maps_flutter](https://pub.dev/packages/google_maps_flutter) di pubspec.yaml

  ![pubspec.yaml](https://jennndol.github.io/assets/images/google_maps_flutter.png)

* ### Set API Key

  * #### Android

    Tambahkan baris kode berikut pada file <code>android/app/src/main/AndroidManifest.xml</code>

    ```xml
    <manifest ...
      <application ...
        <meta-data android:name="com.google.android.geo.API_KEY"
                   android:value="YOUR KEY HERE"/>
    ```

  * #### IOS

    Tambahkan baris kode berikut pada file <code>ios/Runner/AppDelegate.swift</code>

    ```swift
    import UIKit
    import Flutter
    import GoogleMaps
    
    @UIApplicationMain
    @objc class AppDelegate: FlutterAppDelegate {
      override func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
      ) -> Bool {
        GMSServices.provideAPIKey("YOUR KEY HERE")
        GeneratedPluginRegistrant.register(with: self)
        return super.application(application, didFinishLaunchingWithOptions: launchOptions)
      }
    }
    ```

    Tambahkan barıs kode berikut pada file <code>ios/Runner/Info.plist</code>

    ````plist
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict ...
    	<key>io.flutter.embedded_views_preview</key>
    	<true/>
    ````

Setelah beberapa langkah tersebut kita lalui, sekarang kita bisa integrasikan **Google Maps** dalam projek **Flutter** kita. Untuk testing kita bisa mengubah file <code>lib/main.dart</code> kita.

```dart
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Google Maps Demo',
      home: MapSample(),
    );
  }
}

class MapSample extends StatefulWidget {
  @override
  State<MapSample> createState() => MapSampleState();
}

class MapSampleState extends State<MapSample> {
  Completer<GoogleMapController> _controller = Completer();

  static final CameraPosition _kGooglePlex = CameraPosition(
    target: LatLng(37.42796133580664, -122.085749655962),
    zoom: 14.4746,
  );

  static final CameraPosition _kLake = CameraPosition(
      bearing: 192.8334901395799,
      target: LatLng(37.43296265331129, -122.08832357078792),
      tilt: 59.440717697143555,
      zoom: 19.151926040649414);

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: GoogleMap(
        mapType: MapType.hybrid,
        initialCameraPosition: _kGooglePlex,
        onMapCreated: (GoogleMapController controller) {
          _controller.complete(controller);
        },
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _goToTheLake,
        label: Text('To the lake!'),
        icon: Icon(Icons.directions_boat),
      ),
    );
  }

  Future<void> _goToTheLake() async {
    final GoogleMapController controller = await _controller.future;
    controller.animateCamera(CameraUpdate.newCameraPosition(_kLake));
  }
}
```

Jika dijalankan, maka akan terlihat seperti berikut.

![Google Maps](https://jennndol.github.io/assets/images/google-maps-flutter-example.png)

That's all, terimakasih sudah menyempatkan membaca, semoga bermanfaat :).

[mobile]: https://flutter.dev/docs	"mobile"
