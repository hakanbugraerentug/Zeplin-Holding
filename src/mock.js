export const user = {
  name: 'Admin Kullanıcı',
  title: 'Sistem Yöneticisi',
  unit: 'Bilgi İşlem',
  initials: 'AK',
}

export const stats = [
  { label: 'Aktif Personel', value: '248', delta: '+6', trend: 'up', hint: 'bu ay' },
  { label: 'Açık Görev', value: '37', delta: '-12', trend: 'down', hint: 'geçen haftaya göre' },
  { label: 'Sunucu Uptime', value: '%99,94', delta: '+0,02', trend: 'up', hint: '30 gün' },
  { label: 'Günlük Kumanya', value: '186', delta: '+24', trend: 'up', hint: 'öğle servisi' },
]

export const sparkline = [34, 41, 38, 52, 47, 61, 58, 72, 69, 81, 77, 94]

export const duyurular = [
  {
    id: 1,
    baslik: 'Jeneratör bakımı — 27 Ekim Pazartesi',
    ozet: 'B blok elektrik kesintisi 09:00–11:00 arası planlanmıştır. Masaüstü makineleri kapatmayı unutmayın.',
    etiket: 'Teknik',
    tarih: '23 Ekim',
  },
  {
    id: 2,
    baslik: 'Kış lastiği zorunluluğu başlıyor',
    ozet: 'Şirket araçları için lastik değişimi randevuları İK üzerinden alınacak.',
    etiket: 'İdari',
    tarih: '21 Ekim',
  },
  {
    id: 3,
    baslik: 'Yeni kahve makinesi geldi',
    ozet: '4. kat mutfağına filtre kahve makinesi kurulmuştur. Lütfen suyu bitince doldurun.',
    etiket: 'Sosyal',
    tarih: '19 Ekim',
  },
  {
    id: 4,
    baslik: 'VPN sertifikaları yenilendi',
    ozet: 'Eski profilini kullananlar bağlantı hatası alabilir. Yeni profil portalda.',
    etiket: 'Teknik',
    tarih: '17 Ekim',
  },
]

export const hava = {
  sehir: 'Eskişehir',
  simdi: {
    derece: 14,
    durum: 'Parçalı Bulutlu',
    ikon: '⛅',
    hissedilen: 12,
    nem: 68,
    ruzgar: 17,
    basinc: 1014,
    gorus: 9,
    uv: 3,
  },
  saatlik: [
    { saat: '09:00', d: 11, ikon: '🌤️' },
    { saat: '10:00', d: 13, ikon: '🌤️' },
    { saat: '11:00', d: 14, ikon: '⛅' },
    { saat: '12:00', d: 16, ikon: '⛅' },
    { saat: '13:00', d: 17, ikon: '☀️' },
    { saat: '14:00', d: 18, ikon: '☀️' },
    { saat: '15:00', d: 17, ikon: '⛅' },
    { saat: '16:00', d: 15, ikon: '🌦️' },
    { saat: '17:00', d: 13, ikon: '🌧️' },
    { saat: '18:00', d: 11, ikon: '🌧️' },
  ],
  haftalik: [
    { gun: 'Cuma', ikon: '⛅', max: 18, min: 7, yagis: 10 },
    { gun: 'Cumartesi', ikon: '🌧️', max: 15, min: 8, yagis: 75 },
    { gun: 'Pazar', ikon: '🌧️', max: 13, min: 6, yagis: 85 },
    { gun: 'Pazartesi', ikon: '🌤️', max: 16, min: 5, yagis: 15 },
    { gun: 'Salı', ikon: '☀️', max: 19, min: 6, yagis: 0 },
    { gun: 'Çarşamba', ikon: '☀️', max: 21, min: 9, yagis: 0 },
    { gun: 'Perşembe', ikon: '🌫️', max: 17, min: 10, yagis: 20 },
  ],
  diger: [
    { sehir: 'İstanbul', d: 18, ikon: '🌧️' },
    { sehir: 'Ankara', d: 13, ikon: '⛅' },
    { sehir: 'İzmir', d: 23, ikon: '☀️' },
    { sehir: 'Trabzon', d: 16, ikon: '🌦️' },
    { sehir: 'Erzurum', d: 4, ikon: '🌨️' },
  ],
}

export const menu = [
  {
    gun: 'Pazartesi',
    tarih: '27 Ekim',
    kalori: 820,
    yemekler: ['Ezogelin Çorbası', 'Fırında Tavuk Baget', 'Bulgur Pilavı', 'Cacık', 'Şekerpare'],
    vejetaryen: 'Fırın Sebze Graten',
  },
  {
    gun: 'Salı',
    tarih: '28 Ekim',
    kalori: 760,
    yemekler: ['Domates Çorbası', 'Etli Kuru Fasulye', 'Pirinç Pilavı', 'Turşu', 'Kemalpaşa'],
    vejetaryen: 'Mercimek Köftesi',
  },
  {
    gun: 'Çarşamba',
    tarih: '29 Ekim',
    kalori: 0,
    tatil: true,
    yemekler: ['Resmî tatil — mutfak kapalı'],
    vejetaryen: '—',
  },
  {
    gun: 'Perşembe',
    tarih: '30 Ekim',
    kalori: 905,
    yemekler: ['Tarhana Çorbası', 'İzmir Köfte', 'Şehriyeli Pilav', 'Mevsim Salata', 'Sütlaç'],
    vejetaryen: 'Fırında Patlıcan Musakka',
  },
  {
    gun: 'Cuma',
    tarih: '31 Ekim',
    kalori: 680,
    yemekler: ['Yayla Çorbası', 'Fırın Somon', 'Zeytinyağlı Brokoli', 'Roka Salata', 'Meyve'],
    vejetaryen: 'Nohutlu Ispanak',
  },
]

export const ekip = [
  { ad: 'Selin Aydemir', rol: 'Ürün Yöneticisi', birim: 'Ürün', durum: 'Ofiste', tel: '1204', avatar: 'SA' },
  { ad: 'Barış Koçak', rol: 'Kıdemli Geliştirici', birim: 'Mühendislik', durum: 'Uzaktan', tel: '1198', avatar: 'BK' },
  { ad: 'Elif Tanrıverdi', rol: 'Veri Analisti', birim: 'Analitik', durum: 'Ofiste', tel: '1233', avatar: 'ET' },
  { ad: 'Mert Özkan', rol: 'DevOps Mühendisi', birim: 'Altyapı', durum: 'Nöbette', tel: '1177', avatar: 'MÖ' },
  { ad: 'Ayşegül Demir', rol: 'İK Uzmanı', birim: 'İnsan Kaynakları', durum: 'İzinli', tel: '1101', avatar: 'AD' },
  { ad: 'Can Yıldırım', rol: 'UI Tasarımcı', birim: 'Ürün', durum: 'Ofiste', tel: '1215', avatar: 'CY' },
  { ad: 'Zeynep Arslan', rol: 'Test Mühendisi', birim: 'Mühendislik', durum: 'Uzaktan', tel: '1189', avatar: 'ZA' },
  { ad: 'Oğuz Şahin', rol: 'Muhasebe Şefi', birim: 'Finans', durum: 'Ofiste', tel: '1150', avatar: 'OŞ' },
]

export const gorevler = [
  { id: 'OPS-412', baslik: 'Yedekleme scriptini cron yerine systemd timer’a taşı', sahip: 'MÖ', oncelik: 'Yüksek', durum: 'Devam Ediyor', bitis: '28 Ekim' },
  { id: 'URN-087', baslik: 'Yeni onboarding ekranı için kopya metinleri', sahip: 'SA', oncelik: 'Orta', durum: 'İncelemede', bitis: '30 Ekim' },
  { id: 'ENG-233', baslik: 'Rapor sayfasında N+1 sorgu temizliği', sahip: 'BK', oncelik: 'Yüksek', durum: 'Devam Ediyor', bitis: '26 Ekim' },
  { id: 'ANL-019', baslik: 'Q4 kohort analizi veri seti hazırlığı', sahip: 'ET', oncelik: 'Düşük', durum: 'Beklemede', bitis: '7 Kasım' },
  { id: 'DSN-055', baslik: 'Karanlık tema renk kontrastı düzeltmeleri', sahip: 'CY', oncelik: 'Orta', durum: 'Tamamlandı', bitis: '22 Ekim' },
  { id: 'ENG-240', baslik: 'E2E test koşusunu CI’da paralelleştir', sahip: 'ZA', oncelik: 'Orta', durum: 'İncelemede', bitis: '29 Ekim' },
  { id: 'FIN-012', baslik: 'Ekim ayı tedarikçi mutabakatı', sahip: 'OŞ', oncelik: 'Yüksek', durum: 'Beklemede', bitis: '31 Ekim' },
]

export const aktivite = [
  { kim: 'Mert Özkan', ne: 'OPS-412 görevine yorum ekledi', ne_zaman: '12 dk önce' },
  { kim: 'Zeynep Arslan', ne: 'ENG-240 için PR açtı', ne_zaman: '48 dk önce' },
  { kim: 'Selin Aydemir', ne: 'Kasım yol haritasını güncelledi', ne_zaman: '2 saat önce' },
  { kim: 'Can Yıldırım', ne: 'DSN-055 görevini tamamlandı olarak işaretledi', ne_zaman: 'Dün 17:40' },
  { kim: 'Ayşegül Demir', ne: 'Yıllık izin talebi oluşturdu', ne_zaman: 'Dün 11:05' },
]
