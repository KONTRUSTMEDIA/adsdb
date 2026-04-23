const GRAPH_DATA = {
  "accuweather.com": {
    "publisher": "accuweather.com",
    "stats": {
      "total": 26,
      "nodes": 14,
      "edges": 26,
      "direct": 21,
      "via_inter": 4,
      "reseller": 1
    },
    "nodes": [
      {
        "id": "accuweather.com",
        "role": "publisher",
        "layer": 0
      },
      {
        "id": "google.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "appnexus.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "indexexchange.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "rubiconproject.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "openx.com",
        "role": "mixed",
        "layer": 2
      },
      {
        "id": "yahoo.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "pubmatic.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "themediagrid.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "triplelift.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "connatix.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "video.unrulymedia.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "telaria.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "tremorhub.com",
        "role": "direct",
        "layer": 2
      }
    ],
    "links": [
      {
        "source": "accuweather.com",
        "target": "accuweather.com",
        "sid": "1",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "accuweather.com",
        "target": "google.com",
        "sid": "pub-9415735639897500",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "accuweather.com",
        "target": "google.com",
        "sid": "pub-5771594739411148",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "accuweather.com",
        "target": "appnexus.com",
        "sid": "8997",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "indexexchange.com",
        "sid": "185017",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "google.com",
        "target": "indexexchange.com",
        "sid": "185474",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "accuweather.com",
        "target": "indexexchange.com",
        "sid": "214466",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "rubiconproject.com",
        "sid": "12562",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "google.com",
        "target": "openx.com",
        "sid": "539014228",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "accuweather.com",
        "target": "openx.com",
        "sid": "565130139",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "openx.com",
        "sid": "539513282",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "openx.com",
        "sid": "540140706",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "yahoo.com",
        "sid": "57307",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "pubmatic.com",
        "sid": "34576",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "google.com",
        "target": "pubmatic.com",
        "sid": "157374",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "accuweather.com",
        "target": "themediagrid.com",
        "sid": "4OUV6M",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "triplelift.com",
        "sid": "2895",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "triplelift.com",
        "sid": "6873",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "triplelift.com",
        "sid": "2895-EB",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "google.com",
        "target": "triplelift.com",
        "sid": "6873-EB",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "accuweather.com",
        "target": "connatix.com",
        "sid": "102310",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "video.unrulymedia.com",
        "sid": "687806135",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "accuweather.com",
        "target": "telaria.com",
        "sid": "bcs2u-2l0a8",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "tremorhub.com",
        "sid": "bcs2u-2l0a8",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "telaria.com",
        "sid": "bcs2u-levb8",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "accuweather.com",
        "target": "tremorhub.com",
        "sid": "bcs2u-levb8",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      }
    ]
  },
  "cnn.com": {
    "publisher": "cnn.com",
    "stats": {
      "total": 579,
      "nodes": 140,
      "edges": 579,
      "direct": 159,
      "via_inter": 15,
      "reseller": 405
    },
    "nodes": [
      {
        "id": "cnn.com",
        "role": "publisher",
        "layer": 0
      },
      {
        "id": "tremorhub.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "telaria.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "pubmatic.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "verve.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "appnexus.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "yieldmo.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "triplelift.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "google.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "indexexchange.com",
        "role": "mixed",
        "layer": 2
      },
      {
        "id": "liveintent.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "rubiconproject.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "spotx.tv",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "media.net",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "spotxchange.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "aps.amazon.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "freewheel.tv",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "outbrain.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "openx.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "video.unrulymedia.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "rhythmone.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "tritondigital.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "sovrn.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "warnermedia.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "lijit.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "inmobi.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "yahoo.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "verizon.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "xfinity.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "locality.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "groupm.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "wbd.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "advertising.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "corp.xumo.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "xumo.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "beachfront.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "nbc.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "tegna.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "samba.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "lkqd.net",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "unrulymedia.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "showheroes.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "xandr.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "smartadserver.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "ivs.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "viralize.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "app.publicismedia.it",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "orka.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "brightmountainmedia.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "connatix.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "orka.tv/",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "conversantmedia.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "emxdgt.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "filmzie.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "grouprvn.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "lgads.tv",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "sharethrough.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "siprocalads.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "sonobi.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "streamvisionmedia.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "tmhtechco.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "tvp.tv",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "pmg.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "adswizz.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "targetspot.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "vidazoo.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "allinviews.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "nextovp.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "mobkoi.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "themediagrid.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "amazon.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "smaato.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "33across.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "playground.xyz",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "foxtelmedia.com.au",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "xapads.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "contextweb.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "criteo.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "ogury.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "playbuzz.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "loopme.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "rhebus.works",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "ex.co",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "copper6.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "consumable.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "richaudience.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "krushmedia.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "opera.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "proper.io",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "dauup.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "motorik.io",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "chartboost.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "tappx.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "lemmatechnologies.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "keenkale.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "onlinemediasolutions.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "videoheroes.tv",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "improvedigital.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "thebrave.io",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "onetag.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "nextmillennium.io",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "springserve.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "smartclip.net",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "teads.tv",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "alphonso.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "undertone.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "adtech.lgads.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "rakuten.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "theglobeandmail.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "globeandmail.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "the-ozone-project.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "ozoneproject.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "videobyte.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "kargo.com",
        "role": "direct",
        "layer": 2
      },
      {
        "id": "vizio.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "vizio.com ",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "titanos.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "smartyads.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "stamptv.io",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "almatv.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "goldvertise.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "media16.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "applovin.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "wurl.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "redmediaplus.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "ads.titanos.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "redmediasales.co.uk",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "amagi.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "ududigital.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "appnerve.com",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "zetaglobal.net",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "samsung.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "olyzon.tv",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "adingo.jp",
        "role": "downstream",
        "layer": 3
      },
      {
        "id": "kiviads.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "anoki.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "canelamedia.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "dentsu.com",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "sunmedia.tv",
        "role": "hub",
        "layer": 1
      },
      {
        "id": "goldbach-germany.de",
        "role": "downstream",
        "layer": 3
      }
    ],
    "links": [
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "oyz9g-19rao",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "oyz9g-19rao",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "156599",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "verve.com",
        "sid": "2205665",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "7745",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "yieldmo.com",
        "sid": "1981084746893657653",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "triplelift.com",
        "sid": "953",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "7745",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-7439281311086140",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "google.com",
        "target": "indexexchange.com",
        "sid": "187781",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "liveintent.com",
        "sid": "47905",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "157628",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "google.com",
        "target": "pubmatic.com",
        "sid": "158801",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "rubiconproject.com",
        "sid": "11078",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "google.com",
        "target": "rubiconproject.com",
        "sid": "18426",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "219004",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "media.net",
        "sid": "8CU41P4T1",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "219004",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "eq97f-x7x7v",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "eq97f-x7x7v",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "triplelift.com",
        "sid": "876",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "yieldmo.com",
        "sid": "764343212726492773",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "yieldmo.com",
        "sid": "1981084746893657653",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "google.com",
        "target": "yieldmo.com",
        "sid": "2140675095243950036",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "aps.amazon.com",
        "sid": "764c99a5-a420-40ad-bad0-73bd74054751",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "aps.amazon.com",
        "sid": "4df85829-06e0-40a5-9ead-ada1427bec87",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "48804",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "194132",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "238936",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "238936",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "outbrain.com",
        "target": "rubiconproject.com",
        "sid": "19668",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: outbrain.com (INTERMEDIARY)"
      },
      {
        "source": "outbrain.com",
        "target": "openx.com",
        "sid": "540393169",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: outbrain.com (INTERMEDIARY)"
      },
      {
        "source": "outbrain.com",
        "target": "indexexchange.com",
        "sid": "193091",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: outbrain.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "367782854",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "rhythmone.com",
        "sid": "367782854",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "tritondigital.com",
        "sid": "54413",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "google.com",
        "target": "triplelift.com",
        "sid": "876-EB",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "google.com",
        "target": "triplelift.com",
        "sid": "9646-EB",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "sovrn.com",
        "sid": "367853",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "warnermedia.com",
        "target": "lijit.com",
        "sid": "367853",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: warnermedia.com (INTERMEDIARY)"
      },
      {
        "source": "google.com",
        "target": "lijit.com",
        "sid": "367853-eb",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "161163",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "inmobi.com",
        "sid": "b4e83026d85c4f5c8e2f64328ec31b9c",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "515123",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "59494",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "verizon.com",
        "target": "freewheel.tv",
        "sid": "499607",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: verizon.com (PUBLISHER)"
      },
      {
        "source": "xfinity.com",
        "target": "freewheel.tv",
        "sid": "384777",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: xfinity.com (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-7082778644367489",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "372496",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "dix75-1lxhm",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "dix75-1lxhm",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "dix75-1lxhm",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "dix75-1lxhm",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "191701",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "191701-523319",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "59995",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "162583",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "499607-523319",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "openx.com",
        "sid": "558598331",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "59477",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "locality.com",
        "target": "freewheel.tv",
        "sid": "512029",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: locality.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "202522",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "r5rfy-ubehw",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "r5rfy-ubehw",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "505334",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "r5rfy-irhqt",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "r5rfy-irhqt",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "r5rfy-oas58",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "r5rfy-oas58",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "groupm.com",
        "target": "telaria.com",
        "sid": "jh9i8-0noqr",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: groupm.com (PUBLISHER)"
      },
      {
        "source": "groupm.com",
        "target": "tremorhub.com",
        "sid": "jh9i8-0noqr",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: groupm.com (PUBLISHER)"
      },
      {
        "source": "groupm.com",
        "target": "telaria.com",
        "sid": "zw7za-j5a6k",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: groupm.com (PUBLISHER)"
      },
      {
        "source": "groupm.com",
        "target": "tremorhub.com",
        "sid": "zw7za-j5a6k",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: groupm.com (PUBLISHER)"
      },
      {
        "source": "wbd.com",
        "target": "telaria.com",
        "sid": "9aa52-xh8xh",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: wbd.com (PUBLISHER)"
      },
      {
        "source": "wbd.com",
        "target": "tremorhub.com",
        "sid": "9aa52-xh8xh",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: wbd.com (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "groupm.com",
        "sid": "54",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "triplelift.com",
        "sid": "11243",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "google.com",
        "target": "media.net",
        "sid": "8CUTG57F0",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "m8r1c-2u262",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "m8r1c-2u262",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "triplelift.com",
        "sid": "5754-EB",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "google.com",
        "target": "triplelift.com",
        "sid": "11244-EB",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "15701",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "m8r1c-o0139",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "m8r1c-o0139",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "advertising.com",
        "sid": "28605",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "advertising.com",
        "sid": "29040",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "corp.xumo.com",
        "target": "appnexus.com",
        "sid": "12443",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: corp.xumo.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "6849",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "xumo.com",
        "target": "beachfront.com",
        "sid": "14507",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: xumo.com (INTERMEDIARY)"
      },
      {
        "source": "xumo.com",
        "target": "freewheel.tv",
        "sid": "512116",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: xumo.com (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "512116-523319",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "nbc.com",
        "target": "freewheel.tv",
        "sid": "169843",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: nbc.com (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "511339",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "tegna.com",
        "target": "freewheel.tv",
        "sid": "510839",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tegna.com (BOTH)"
      },
      {
        "source": "locality.com",
        "target": "freewheel.tv",
        "sid": "512029",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: locality.com (INTERMEDIARY)"
      },
      {
        "source": "samba.tv",
        "target": "freewheel.tv",
        "sid": "515189",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: samba.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "182257",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "xumo.com",
        "target": "lkqd.net",
        "sid": "664",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: xumo.com (INTERMEDIARY)"
      },
      {
        "source": "unrulymedia.com",
        "target": "pubmatic.com",
        "sid": "159277",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: unrulymedia.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "rhythmone.com",
        "sid": "567009000",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "unrulymedia.com",
        "target": "rubiconproject.com",
        "sid": "15268",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: unrulymedia.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "141052",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "160227",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "285547",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "141052",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "160227",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "285547",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "xumo.com",
        "target": "telaria.com",
        "sid": "73aj2-kko44",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: xumo.com (INTERMEDIARY)"
      },
      {
        "source": "xumo.com",
        "target": "tremorhub.com",
        "sid": "73aj2-kko44",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: xumo.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "567009000",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "59817",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "showheroes.com",
        "target": "xandr.com",
        "sid": "8833",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (INTERMEDIARY)"
      },
      {
        "source": "showheroes.com",
        "target": "smartadserver.com",
        "sid": "2161",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (INTERMEDIARY)"
      },
      {
        "source": "showheroes.com",
        "target": "smartadserver.com",
        "sid": "3668",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "202009",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "202009",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1306975",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1306991",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "showheroes.com",
        "target": "pubmatic.com",
        "sid": "156695",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (BOTH)"
      },
      {
        "source": "google.com",
        "target": "pubmatic.com",
        "sid": "160405",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "ivs.tv",
        "target": "pubmatic.com",
        "sid": "120391",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ivs.tv (INTERMEDIARY)"
      },
      {
        "source": "viralize.com",
        "target": "pubmatic.com",
        "sid": "156962",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: viralize.com (INTERMEDIARY)"
      },
      {
        "source": "app.publicismedia.it",
        "target": "pubmatic.com",
        "sid": "161546",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: app.publicismedia.it (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "215031",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "locality.com",
        "target": "freewheel.tv",
        "sid": "512029",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: locality.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "17499",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "locality.com",
        "target": "pubmatic.com",
        "sid": "166192",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: locality.com (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "8jhse-ifyq9",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "8jhse-ifyq9",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "orka.tv",
        "sid": "25152724",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "orka.tv",
        "target": "appnexus.com",
        "sid": "13437",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "brightmountainmedia.com",
        "sid": "2686695",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "connatix.com",
        "sid": "1676721125209786",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "orka.tv/",
        "target": "conversantmedia.com",
        "sid": "100642",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv/ (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "emxdgt.com",
        "sid": "2547",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "filmzie.com",
        "sid": "9894060",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1598940",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1598941",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "freewheel.tv",
        "sid": "533471-r-523319",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "orka.tv",
        "target": "freewheel.tv",
        "sid": "sg1256505",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "orka.tv",
        "target": "grouprvn.com",
        "sid": "520202911",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "inmobi.com",
        "sid": "251e46d6fba54576a2110180c552a59f",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "lgads.tv",
        "sid": "475902",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "orka.tv",
        "target": "lijit.com",
        "sid": "504676",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "orka.tv",
        "target": "lkqd.net",
        "sid": "1100055764",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "openx.com",
        "sid": "559612253",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "pubmatic.com",
        "sid": "161428",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "orka.tv",
        "target": "pubmatic.com",
        "sid": "161854",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (PUBLISHER)"
      },
      {
        "source": "orka.tv",
        "target": "pubmatic.com",
        "sid": "163735",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "orka.tv",
        "target": "sharethrough.com",
        "sid": "lmY9aAKH",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "siprocalads.com",
        "sid": "SEQ7S9CH7H0SPD3U4M8JPGECAO",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "smartadserver.com",
        "sid": "4310",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "orka.tv",
        "target": "sonobi.com",
        "sid": "f70fbb4d0a",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "streamvisionmedia.com",
        "sid": "47524",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "tmhtechco.com",
        "sid": "1021",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "orka.tv",
        "target": "tvp.tv",
        "sid": "AT70",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "2600543444894572145",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "60169",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "cbvri-ul7ej",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "cbvri-ul7ej",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "53972",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "pmg.com",
        "target": "freewheel.tv",
        "sid": "537323",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: pmg.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "adswizz.com",
        "sid": "86",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "adswizz.com",
        "sid": "tunein",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "adswizz.com",
        "sid": "tunein",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-4716253307645677",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-1075310851762143",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "rubiconproject.com",
        "sid": "18824",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "rubiconproject.com",
        "sid": "11236",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "targetspot.com",
        "sid": "172",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "outbrain.com",
        "sid": "0048938c4af9641f2e04565be89ece5954",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "q017o-78mlk",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "q017o-78mlk",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "advertising.com",
        "sid": "26154",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "225721",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "741650",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "vidazoo.com",
        "target": "rubiconproject.com",
        "sid": "17130",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vidazoo.com (INTERMEDIARY)"
      },
      {
        "source": "outbrain.com",
        "target": "rubiconproject.com",
        "sid": "19668",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: outbrain.com (INTERMEDIARY)"
      },
      {
        "source": "allinviews.com",
        "target": "lkqd.net",
        "sid": "450",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: allinviews.com (INTERMEDIARY)"
      },
      {
        "source": "outbrain.com",
        "target": "vidazoo.com",
        "sid": "1773068026",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: outbrain.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "advertising.com",
        "sid": "28038",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "outbrain.com",
        "target": "appnexus.com",
        "sid": "7597",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: outbrain.com (INTERMEDIARY)"
      },
      {
        "source": "outbrain.com",
        "target": "pubmatic.com",
        "sid": "160065",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: outbrain.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "r5rfy-ubehw",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "r5rfy-ubehw",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "r5rfy-ezca7",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "r5rfy-ezca7",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "r5rfy-acutr",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "r5rfy-acutr",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "212562",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "212562",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "163542",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "nextovp.com",
        "target": "pubmatic.com",
        "sid": "163347",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: nextovp.com (INTERMEDIARY)"
      },
      {
        "source": "nextovp.com",
        "target": "sonobi.com",
        "sid": "e20b1679ef",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: nextovp.com (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "611309574",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "mobkoi.com",
        "sid": "EFE3D4B1",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1578381",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "8353",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "55774",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "8353",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-7439281311086140",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-8566795000208645",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "openx.com",
        "sid": "540165835",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "rubiconproject.com",
        "sid": "11016",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "beachfront.com",
        "sid": "2268",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "beachfront.com",
        "sid": "beachfront_2268",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "3121",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "156754",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "157184",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "157916",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "google.com",
        "target": "pubmatic.com",
        "sid": "158829",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "5z5sq",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "5z5sq",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "themediagrid.com",
        "sid": "q97fsh",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-8536014366288550",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "outbrain.com",
        "sid": "007d5bdae84ea9f865307ba5e95aa29dda",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "rubiconproject.com",
        "sid": "22324",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "191752",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "201130",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "w0pz3-h98vw",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "w0pz3-h98vw",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "aps.amazon.com",
        "sid": "afb3905d-fb4a-493a-a81f-417e53ee6180",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "google.com",
        "target": "rubiconproject.com",
        "sid": "22326",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "mobkoi.com",
        "target": "openx.com",
        "sid": "541135108",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: mobkoi.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-3395889316192477",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "143454",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "143454",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "193663",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "px2ii-9d07k",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "px2ii-9d07k",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "229540",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "229540",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "55774",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "amazon.com",
        "target": "smaato.com",
        "sid": "1100044650",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: amazon.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "157628-A",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "8353",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "google.com",
        "target": "indexexchange.com",
        "sid": "196349",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "triplelift.com",
        "sid": "11712",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "sovrn.com",
        "sid": "375328",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "aps.amazon.com",
        "target": "smartadserver.com",
        "sid": "4125",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: aps.amazon.com (INTERMEDIARY)"
      },
      {
        "source": "amazon.com",
        "target": "yieldmo.com",
        "sid": "2719019867620450718",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: amazon.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "sharethrough.com",
        "sid": "04c75099",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "sharethrough.com",
        "target": "pubmatic.com",
        "sid": "156557",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sharethrough.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "158723",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "sharethrough.com",
        "target": "rubiconproject.com",
        "sid": "18694",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sharethrough.com (INTERMEDIARY)"
      },
      {
        "source": "sharethrough.com",
        "target": "openx.com",
        "sid": "540274407",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sharethrough.com (INTERMEDIARY)"
      },
      {
        "source": "sharethrough.com",
        "target": "33across.com",
        "sid": "0013300001kQj2HAAS",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sharethrough.com (INTERMEDIARY)"
      },
      {
        "source": "sharethrough.com",
        "target": "smaato.com",
        "sid": "1100047713",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sharethrough.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "59531",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "7290",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "playground.xyz",
        "sid": "f7602da1",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "foxtelmedia.com.au",
        "sid": "1004",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "1021095649",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "google.com",
        "target": "triplelift.com",
        "sid": "11712-EB",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "xapads.com",
        "target": "pubmatic.com",
        "sid": "162882",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: xapads.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "contextweb.com",
        "sid": "562842",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1581157",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1581210",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-3990748024667386",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "xapads.com",
        "sid": "163903",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "themediagrid.com",
        "sid": "13CDY7",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "criteo.com",
        "sid": "B-061417",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "205881",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "163390163390",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "207752",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "ogury.com",
        "target": "pubmatic.com",
        "sid": "163238",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ogury.com (INTERMEDIARY)"
      },
      {
        "source": "ogury.com",
        "target": "smartadserver.com",
        "sid": "4537",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ogury.com (INTERMEDIARY)"
      },
      {
        "source": "ogury.com",
        "target": "rubiconproject.com",
        "sid": "25198",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ogury.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "55774",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "playbuzz.com",
        "sid": "0010J00001w8ktGQAQ",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-9790762811057699",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "smartadserver.com",
        "target": "openx.com",
        "sid": "537149888",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: smartadserver.com (INTERMEDIARY)"
      },
      {
        "source": "smartadserver.com",
        "target": "loopme.com",
        "sid": "5679",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: smartadserver.com (INTERMEDIARY)"
      },
      {
        "source": "smartadserver.com",
        "target": "sharethrough.com",
        "sid": "OAW69Fon",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: smartadserver.com (INTERMEDIARY)"
      },
      {
        "source": "playbuzz.com",
        "target": "smartadserver.com",
        "sid": "5306",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (BOTH)"
      },
      {
        "source": "playbuzz.com",
        "target": "sharethrough.com",
        "sid": "5306",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (BOTH)"
      },
      {
        "source": "smartadserver.com",
        "target": "pubmatic.com",
        "sid": "156439",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: smartadserver.com (INTERMEDIARY)"
      },
      {
        "source": "smartadserver.com",
        "target": "rhebus.works",
        "sid": "5252004478",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: smartadserver.com (INTERMEDIARY)"
      },
      {
        "source": "playbuzz.com",
        "target": "freewheel.tv",
        "sid": "sg1256479",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (INTERMEDIARY)"
      },
      {
        "source": "playbuzz.com",
        "target": "freewheel.tv",
        "sid": "535658-r-523319",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (INTERMEDIARY)"
      },
      {
        "source": "ex.co",
        "target": "freewheel.tv",
        "sid": "535658-r-524565",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ex.co (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "79885747",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "video.unrulymedia.com",
        "target": "pubmatic.com",
        "sid": "159382",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: video.unrulymedia.com (INTERMEDIARY)"
      },
      {
        "source": "ex.co",
        "target": "pubmatic.com",
        "sid": "166181",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ex.co (BOTH)"
      },
      {
        "source": "ex.co",
        "target": "sharethrough.com",
        "sid": "3EmN8oQH",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ex.co (INTERMEDIARY)"
      },
      {
        "source": "playbuzz.com",
        "target": "appnexus.com",
        "sid": "2992",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (BOTH)"
      },
      {
        "source": "playbuzz.com",
        "target": "triplelift.com",
        "sid": "12157",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (INTERMEDIARY)"
      },
      {
        "source": "playbuzz.com",
        "target": "copper6.com",
        "sid": "764358",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-9966039342650298",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "copper6.com",
        "target": "xandr.com",
        "sid": "16546",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: copper6.com (INTERMEDIARY)"
      },
      {
        "source": "copper6.com",
        "target": "lijit.com",
        "sid": "503539",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: copper6.com (INTERMEDIARY)"
      },
      {
        "source": "copper6.com",
        "target": "consumable.com",
        "sid": "2001634",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: copper6.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1605137",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1605175",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "playbuzz.com",
        "target": "sonobi.com",
        "sid": "b22b30d810",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (BOTH)"
      },
      {
        "source": "sonobi.com",
        "target": "pubmatic.com",
        "sid": "166398",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sonobi.com (INTERMEDIARY)"
      },
      {
        "source": "playbuzz.com",
        "target": "richaudience.com",
        "sid": "ALeCadXMEQ",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (BOTH)"
      },
      {
        "source": "richaudience.com",
        "target": "rubiconproject.com",
        "sid": "13510",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: richaudience.com (INTERMEDIARY)"
      },
      {
        "source": "richaudience.com",
        "target": "pubmatic.com",
        "sid": "156538",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: richaudience.com (INTERMEDIARY)"
      },
      {
        "source": "richaudience.com",
        "target": "appnexus.com",
        "sid": "8233",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: richaudience.com (INTERMEDIARY)"
      },
      {
        "source": "playbuzz.com",
        "target": "lijit.com",
        "sid": "241560",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: playbuzz.com (BOTH)"
      },
      {
        "source": "lijit.com",
        "target": "pubmatic.com",
        "sid": "161899",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lijit.com (INTERMEDIARY)"
      },
      {
        "source": "sovrn.com",
        "target": "krushmedia.com",
        "sid": "AJxF6R572a9M6CaTvK",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sovrn.com (INTERMEDIARY)"
      },
      {
        "source": "lijit.com",
        "target": "opera.com",
        "sid": "pub10014056052800",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lijit.com (INTERMEDIARY)"
      },
      {
        "source": "lijit.com",
        "target": "smartadserver.com",
        "sid": "4926",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lijit.com (INTERMEDIARY)"
      },
      {
        "source": "lijit.com",
        "target": "conversantmedia.com",
        "sid": "100714",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lijit.com (INTERMEDIARY)"
      },
      {
        "source": "lijit.com",
        "target": "pubmatic.com",
        "sid": "164079",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lijit.com (INTERMEDIARY)"
      },
      {
        "source": "proper.io",
        "target": "appnexus.com",
        "sid": "1019",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: proper.io (INTERMEDIARY)"
      },
      {
        "source": "lijit.com",
        "target": "dauup.com",
        "sid": "34142",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lijit.com (INTERMEDIARY)"
      },
      {
        "source": "sovrn.com",
        "target": "motorik.io",
        "sid": "100463",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sovrn.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "playbuzz.com",
        "sid": "0010J00001w8ktGQAQ",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "sovrn.com",
        "target": "motorik.io",
        "sid": "100463",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sovrn.com (INTERMEDIARY)"
      },
      {
        "source": "sharethrough.com",
        "target": "33across.com",
        "sid": "0013300001kQj2HAAS",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sharethrough.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "chartboost.com",
        "sid": "5da62a1035b91e0aff190bf7",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "tappx.com",
        "target": "themediagrid.com",
        "sid": "4FDQYH",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "lemmatechnologies.com",
        "sid": "97",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "inmobi.com",
        "sid": "ec6f6ceb8bb1440ba5455644ec96c275",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "tappx.com",
        "target": "keenkale.com",
        "sid": "170624",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (PUBLISHER)"
      },
      {
        "source": "tappx.com",
        "target": "onlinemediasolutions.com",
        "sid": "20937",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "tappx.com",
        "sid": "42881",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "tappx.com",
        "target": "pubmatic.com",
        "sid": "92509",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (BOTH)"
      },
      {
        "source": "tappx.com",
        "target": "rubiconproject.com",
        "sid": "13856",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "tappx.com",
        "target": "loopme.com",
        "sid": "11227",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "9569",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "tappx.com",
        "target": "pubmatic.com",
        "sid": "158111",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "10824",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "tappx.com",
        "target": "triplelift.com",
        "sid": "11617",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "tappx.com",
        "target": "smartadserver.com",
        "sid": "1692",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "3341072718",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "tappx.com",
        "target": "videoheroes.tv",
        "sid": "212473",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "tappx.com",
        "target": "improvedigital.com",
        "sid": "1934",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (BOTH)"
      },
      {
        "source": "tappx.com",
        "target": "sharethrough.com",
        "sid": "49574e61",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "tappx.com",
        "target": "lijit.com",
        "sid": "396126",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "tappx.com",
        "target": "thebrave.io",
        "sid": "1234661",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "tappx.com",
        "target": "onetag.com",
        "sid": "74dfccdc3689510",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: tappx.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "contextweb.com",
        "sid": "563042",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "videoheroes.tv",
        "target": "rubiconproject.com",
        "sid": "25060",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: videoheroes.tv (INTERMEDIARY)"
      },
      {
        "source": "videoheroes.tv",
        "target": "appnexus.com",
        "sid": "12976",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: videoheroes.tv (INTERMEDIARY)"
      },
      {
        "source": "videoheroes.tv",
        "target": "appnexus.com",
        "sid": "12976",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: videoheroes.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "yahoo.com",
        "sid": "55774",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "nextmillennium.io",
        "target": "triplelift.com",
        "sid": "8085",
        "type": "via-intermediary",
        "hop": 2,
        "note": "sellers.json: nextmillennium.io (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "springserve.com",
        "sid": "1247",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "lgads.tv",
        "target": "telaria.com",
        "sid": "9cdv3-7humk",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "tremorhub.com",
        "sid": "9cdv3-7humk",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1456146",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1457282",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "lgads.tv",
        "target": "smartclip.net",
        "sid": "14313",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "indexexchange.com",
        "sid": "206117",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "xandr.com",
        "sid": "13307",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "teads.tv",
        "sid": "26041",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "lgads.tv",
        "target": "pubmatic.com",
        "sid": "164481",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "522403382",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "alphonso.tv",
        "target": "improvedigital.com",
        "sid": "2545",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: alphonso.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "openx.com",
        "sid": "559105323",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "triplelift.com",
        "sid": "11342",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "smartadserver.com",
        "sid": "4311",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "springserve.com",
        "sid": "1247",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "lgads.tv",
        "target": "telaria.com",
        "sid": "9cdv3-7humk",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "tremorhub.com",
        "sid": "9cdv3-7humk",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1456146",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1457282",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1572593",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1572594",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "locality.com",
        "target": "freewheel.tv",
        "sid": "512029",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: locality.com (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "appnexus.com",
        "sid": "13307",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "indexexchange.com",
        "sid": "197202",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "indexexchange.com",
        "sid": "206117",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "pubmatic.com",
        "sid": "161508",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "pubmatic.com",
        "sid": "164481",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "openx.com",
        "sid": "559105323",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "teads.tv",
        "sid": "26041",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "triplelift.com",
        "sid": "11342",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "yahoo.com",
        "sid": "59642",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "sharethrough.com",
        "sid": "0E9XxmSd",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "smartadserver.com",
        "sid": "4311",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "undertone.com",
        "sid": "4143",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "adtech.lgads.tv",
        "target": "lkqd.net",
        "sid": "1100054253",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: adtech.lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "smaato.com",
        "sid": "1100054264",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "conversantmedia.com",
        "sid": "100640",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "teads.tv",
        "sid": "859",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "rakuten.tv",
        "sid": "61331",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "rakuten.tv",
        "target": "telaria.com",
        "sid": "busk1-8wlce",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: rakuten.tv (INTERMEDIARY)"
      },
      {
        "source": "rakuten.tv",
        "target": "tremorhub.com",
        "sid": "busk1-8wlce",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: rakuten.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "smartclip.net",
        "sid": "14313",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "209503",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "205881",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "indexexchange.com",
        "sid": "209503",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "teads.tv",
        "sid": "31109",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "164439",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "pubmatic.com",
        "sid": "163390",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "appnexus.com",
        "sid": "7290",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "playground.xyz",
        "sid": "f7602da1",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "springserve.com",
        "sid": "1247",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "lgads.tv",
        "target": "telaria.com",
        "sid": "9cdv3-7humk",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "tremorhub.com",
        "sid": "9cdv3-7humk",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1456146",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1457282",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "lgads.tv",
        "target": "smartclip.net",
        "sid": "14313",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "indexexchange.com",
        "sid": "206117",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "xandr.com",
        "sid": "13307",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "teads.tv",
        "sid": "26041",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "lgads.tv",
        "target": "pubmatic.com",
        "sid": "164481",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "522403382",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "alphonso.tv",
        "target": "improvedigital.com",
        "sid": "2545",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: alphonso.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "openx.com",
        "sid": "559105323",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "triplelift.com",
        "sid": "11342",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "smartadserver.com",
        "sid": "4311",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-3746578658400510",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "theglobeandmail.com",
        "sid": "GAQV7PP",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "theglobeandmail.com",
        "target": "indexexchange.com",
        "sid": "181495",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: theglobeandmail.com (BOTH)"
      },
      {
        "source": "google.com",
        "target": "indexexchange.com",
        "sid": "185292",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "globeandmail.com",
        "target": "appnexus.com",
        "sid": "1285",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: globeandmail.com (PUBLISHER)"
      },
      {
        "source": "theglobeandmail.com",
        "target": "rubiconproject.com",
        "sid": "24730",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: theglobeandmail.com (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "rubiconproject.com",
        "sid": "24732",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "the-ozone-project.com",
        "target": "pubmatic.com",
        "sid": "160557",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: the-ozone-project.com (BOTH)"
      },
      {
        "source": "ozoneproject.com",
        "target": "indexexchange.com",
        "sid": "206233",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ozoneproject.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "videobyte.com",
        "sid": "VJ3yZJ2",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "kargo.com",
        "sid": "113",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "vizio.com",
        "target": "telaria.com",
        "sid": "oyz9g-ocspl",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (INTERMEDIARY)"
      },
      {
        "source": "vizio.com",
        "target": "tremorhub.com",
        "sid": "oyz9g-ocspl",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (INTERMEDIARY)"
      },
      {
        "source": "vizio.com",
        "target": "appnexus.com",
        "sid": "13779",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (INTERMEDIARY)"
      },
      {
        "source": "vizio.com",
        "target": "yahoo.com",
        "sid": "59120",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1119233",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "vizio.com ",
        "target": "pubmatic.com",
        "sid": "162263",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com  (INTERMEDIARY)"
      },
      {
        "source": "vizio.com",
        "target": "telaria.com",
        "sid": "oyz9g-ocspl",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (INTERMEDIARY)"
      },
      {
        "source": "vizio.com",
        "target": "tremorhub.com",
        "sid": "oyz9g-ocspl",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (INTERMEDIARY)"
      },
      {
        "source": "vizio.com",
        "target": "appnexus.com",
        "sid": "13779",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (INTERMEDIARY)"
      },
      {
        "source": "vizio.com",
        "target": "yahoo.com",
        "sid": "59120",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1119233",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "vizio.com ",
        "target": "pubmatic.com",
        "sid": "162263",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com  (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "titanos.tv",
        "sid": "73204",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "conversantmedia.com",
        "target": "pubmatic.com",
        "sid": "161891",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: conversantmedia.com (INTERMEDIARY)"
      },
      {
        "source": "conversantmedia.com",
        "target": "smartyads.com",
        "sid": "300045",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: conversantmedia.com (INTERMEDIARY)"
      },
      {
        "source": "conversantmedia.com",
        "target": "lijit.com",
        "sid": "411121",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: conversantmedia.com (INTERMEDIARY)"
      },
      {
        "source": "titanos.tv",
        "target": "triplelift.com",
        "sid": "14376",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: titanos.tv (INTERMEDIARY)"
      },
      {
        "source": "google.com",
        "target": "triplelift.com",
        "sid": "14376-EB",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "956802361",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "304955",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "spotx.tv",
        "sid": "304955",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "lgads.tv",
        "target": "telaria.com",
        "sid": "2auap-ich32",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "telaria.com",
        "sid": "2auap-45web",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "telaria.com",
        "sid": "2auap-zihku",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "stamptv.io",
        "target": "springserve.com",
        "sid": "1876",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: stamptv.io (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "stamptv.io",
        "sid": "69067",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1598947",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1598948",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "stamptv.io",
        "target": "improvedigital.com",
        "sid": "2415",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: stamptv.io (INTERMEDIARY)"
      },
      {
        "source": "stamptv.io",
        "target": "appnexus.com",
        "sid": "14801",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: stamptv.io (INTERMEDIARY)"
      },
      {
        "source": "stamptv.io",
        "target": "smartadserver.com",
        "sid": "4979",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: stamptv.io (INTERMEDIARY)"
      },
      {
        "source": "stamptv.io",
        "target": "telaria.com",
        "sid": "6zj44-wramu",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: stamptv.io (INTERMEDIARY)"
      },
      {
        "source": "stamptv.io",
        "target": "tremorhub.com",
        "sid": "6zj44-wramu",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: stamptv.io (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "400335124",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "almatv.tv",
        "target": "rakuten.tv",
        "sid": "67486",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: almatv.tv (BOTH)"
      },
      {
        "source": "goldvertise.com",
        "target": "tremorhub.com",
        "sid": "9l6ha-amhud",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "telaria.com",
        "sid": "9l6ha-amhud",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "telaria.com",
        "sid": "9l6ha-n66r7",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "tremorhub.com",
        "sid": "9l6ha-n66r7",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "pubmatic.com",
        "sid": "162439",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "smartadserver.com",
        "sid": "4600",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "media16.tv",
        "target": "telaria.com",
        "sid": "tiw3e-4t1sy",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: media16.tv (INTERMEDIARY)"
      },
      {
        "source": "media16.tv",
        "target": "tremorhub.com",
        "sid": "tiw3e-4t1sy",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: media16.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "applovin.com",
        "sid": "72170",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "wurl.com",
        "target": "applovin.com",
        "sid": "2713cc543ecb0969b83e3fdbf9ff011f",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: wurl.com (BOTH)"
      },
      {
        "source": "showheroes.com",
        "target": "xandr.com",
        "sid": "8833",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (INTERMEDIARY)"
      },
      {
        "source": "titanos.tv",
        "target": "smartadserver.com",
        "sid": "5084",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: titanos.tv (BOTH)"
      },
      {
        "source": "showheroes.com",
        "target": "telaria.com",
        "sid": "l2qly-o8w5q",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (INTERMEDIARY)"
      },
      {
        "source": "showheroes.com",
        "target": "tremorhub.com",
        "sid": "l2qly-o8w5q",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-9829476400767085",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "showheroes.com",
        "target": "pubmatic.com",
        "sid": "156695",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1581799",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "11581801",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "showheroes.com",
        "target": "smartadserver.com",
        "sid": "3668",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: showheroes.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "168269289",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "redmediaplus.com",
        "sid": "1205",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "ads.titanos.tv",
        "target": "smartclip.net",
        "sid": "15378",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ads.titanos.tv (INTERMEDIARY)"
      },
      {
        "source": "ads.titanos.tv",
        "target": "smartclip.net",
        "sid": "28114",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ads.titanos.tv (PUBLISHER)"
      },
      {
        "source": "redmediasales.co.uk",
        "target": "telaria.com",
        "sid": "3xbnf-dtcl0",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: redmediasales.co.uk (INTERMEDIARY)"
      },
      {
        "source": "titanos.tv",
        "target": "telaria.com",
        "sid": "imah2-64ow3",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: titanos.tv (INTERMEDIARY)"
      },
      {
        "source": "redmediasales.co.uk",
        "target": "tremorhub.com",
        "sid": "3xbnf-dtcl0",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: redmediasales.co.uk (INTERMEDIARY)"
      },
      {
        "source": "titanos.tv",
        "target": "tremorhub.com",
        "sid": "imah2-64ow3",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: titanos.tv (INTERMEDIARY)"
      },
      {
        "source": "orka.tv",
        "target": "amagi.com",
        "sid": "60916",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (PUBLISHER)"
      },
      {
        "source": "ududigital.com",
        "target": "appnerve.com",
        "sid": "761284",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: ududigital.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1598940",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1598941",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "lgads.tv",
        "sid": "475902",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "orka.tv",
        "target": "smartadserver.com",
        "sid": "4310",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "streamvisionmedia.com",
        "sid": "47524",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "zetaglobal.net",
        "sid": "785",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "samsung.com",
        "target": "olyzon.tv",
        "sid": "72850",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: samsung.com (PUBLISHER)"
      },
      {
        "source": "google.com",
        "target": "adingo.jp",
        "sid": "31100",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "siprocalads.com",
        "sid": "SEQ7S9CH7H0SPD3U4M8JPGECAO",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "google.com",
        "target": "adingo.jp",
        "sid": "31102",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "google.com",
        "target": "adingo.jp",
        "sid": "31104",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: google.com (INTERMEDIARY)"
      },
      {
        "source": "orka.tv",
        "target": "appnexus.com",
        "sid": "13437",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "orka.tv/",
        "target": "conversantmedia.com",
        "sid": "100642",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv/ (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "contextweb.com",
        "sid": "563324",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "emxdgt.com",
        "sid": "2547",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "lijit.com",
        "sid": "504676",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "openx.com",
        "sid": "559612253",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "orka.tv",
        "target": "pubmatic.com",
        "sid": "161428",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "orka.tv",
        "target": "pubmatic.com",
        "sid": "161854",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (PUBLISHER)"
      },
      {
        "source": "orka.tv",
        "target": "pubmatic.com",
        "sid": "163735",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: orka.tv (BOTH)"
      },
      {
        "source": "kiviads.com",
        "target": "pubmatic.com",
        "sid": "163161",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: kiviads.com (INTERMEDIARY)"
      },
      {
        "source": "anoki.tv",
        "target": "smartadserver.com",
        "sid": "4942",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: anoki.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "spotxchange.com",
        "sid": "285260",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "canelamedia.com",
        "target": "telaria.com",
        "sid": "3zcla-3bhdx",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: canelamedia.com (BOTH)"
      },
      {
        "source": "canelamedia.com",
        "target": "tremorhub.com",
        "sid": "3zcla-3bhdx",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: canelamedia.com (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "2600543444894572145",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-0796790890307838",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-2676898002317977",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-7279729872265667",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-8221793852898543",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-1968276357835282",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "goldvertise.com",
        "target": "tremorhub.com",
        "sid": "9l6ha-xooky",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "telaria.com",
        "sid": "9l6ha-xooky",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "pubmatic.com",
        "sid": "162439",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "smartadserver.com",
        "sid": "4600",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "dentsu.com",
        "target": "telaria.com",
        "sid": "lkiu7-jqvg1",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: dentsu.com (INTERMEDIARY)"
      },
      {
        "source": "dentsu.com",
        "target": "tremorhub.com",
        "sid": "lkiu7-jqvg1",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: dentsu.com (INTERMEDIARY)"
      },
      {
        "source": "sunmedia.tv",
        "target": "telaria.com",
        "sid": "cpu32-92xut",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sunmedia.tv (INTERMEDIARY)"
      },
      {
        "source": "sunmedia.tv",
        "target": "tremorhub.com",
        "sid": "cpu32-92xut",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sunmedia.tv (INTERMEDIARY)"
      },
      {
        "source": "richaudience.com",
        "target": "pubmatic.com",
        "sid": "81564",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: richaudience.com (INTERMEDIARY)"
      },
      {
        "source": "richaudience.com",
        "target": "pubmatic.com",
        "sid": "156538",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: richaudience.com (INTERMEDIARY)"
      },
      {
        "source": "lijit.com",
        "target": "rubiconproject.com",
        "sid": "17960",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lijit.com (INTERMEDIARY)"
      },
      {
        "source": "sunmedia.tv",
        "target": "smartadserver.com",
        "sid": "1999",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sunmedia.tv (INTERMEDIARY)"
      },
      {
        "source": "dentsu.com",
        "target": "telaria.com",
        "sid": "lkiu7-jqvg1",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: dentsu.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "telaria.com",
        "sid": "9l6ha-j74jl",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "telaria.com",
        "sid": "9l6ha-hwhw3",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "tremorhub.com",
        "sid": "9l6ha-hwhw3",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "tremorhub.com",
        "sid": "9l6ha-hwhw3",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "dentsu.com",
        "target": "tremorhub.com",
        "sid": "lkiu7-jqvg1",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: dentsu.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "tremorhub.com",
        "sid": "9l6ha-j74jl",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "sunmedia.tv",
        "target": "dentsu.com",
        "sid": "71228",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: sunmedia.tv (PUBLISHER)"
      },
      {
        "source": "richaudience.com",
        "target": "appnexus.com",
        "sid": "8233",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: richaudience.com (INTERMEDIARY)"
      },
      {
        "source": "titanos.tv",
        "target": "dentsu.com",
        "sid": "72553",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: titanos.tv (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "goldbach-germany.de",
        "sid": "WURL",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "goldvertise.com",
        "target": "smartadserver.com",
        "sid": "4600",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "pubmatic.com",
        "sid": "162439",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "1a4e959a1b50034a",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "1a4e959a1b50034a",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "lgads.tv",
        "target": "appnexus.com",
        "sid": "13307",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "indexexchange.com",
        "sid": "197202",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "pubmatic.com",
        "sid": "161508",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "pubmatic.com",
        "sid": "164481",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "openx.com",
        "sid": "559105323",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "triplelift.com",
        "sid": "11342",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "yahoo.com",
        "sid": "59642",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "sharethrough.com",
        "sid": "0E9XxmSd",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "smartadserver.com",
        "sid": "4311",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "adtech.lgads.tv",
        "target": "lkqd.net",
        "sid": "1100054253",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: adtech.lgads.tv (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "smaato.com",
        "sid": "1100054264",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "google.com",
        "sid": "pub-6341300221321950",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "goldvertise.com",
        "target": "pubmatic.com",
        "sid": "162439",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "goldvertise.com",
        "target": "smartadserver.com",
        "sid": "4600",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: goldvertise.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1456146",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1457282",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1572593",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "cnn.com",
        "target": "freewheel.tv",
        "sid": "1572594",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "locality.com",
        "target": "freewheel.tv",
        "sid": "512029",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: locality.com (INTERMEDIARY)"
      },
      {
        "source": "lgads.tv",
        "target": "indexexchange.com",
        "sid": "206117",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "undertone.com",
        "sid": "4143",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (PUBLISHER)"
      },
      {
        "source": "lgads.tv",
        "target": "conversantmedia.com",
        "sid": "100640",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "lgads.tv",
        "target": "smartclip.net",
        "sid": "14313",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: lgads.tv (BOTH)"
      },
      {
        "source": "cnn.com",
        "target": "teads.tv",
        "sid": "29602",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "x7rw5-eh5yl",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "x7rw5-eh5yl",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "vizio.com",
        "target": "freewheel.tv",
        "sid": "sg1251726",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (INTERMEDIARY)"
      },
      {
        "source": "vizio.com",
        "target": "freewheel.tv",
        "sid": "535082-r-523319",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (INTERMEDIARY)"
      },
      {
        "source": "cnn.com",
        "target": "video.unrulymedia.com",
        "sid": "686913342",
        "type": "reseller",
        "hop": 1,
        "note": "unresolved"
      },
      {
        "source": "vizio.com",
        "target": "springserve.com",
        "sid": "1043",
        "type": "reseller",
        "hop": 2,
        "note": "sellers.json: vizio.com (PUBLISHER)"
      },
      {
        "source": "cnn.com",
        "target": "lgads.tv",
        "sid": "948648",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "2auap-pv33y",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "2auap-pv33y",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "wbd.com",
        "sid": "1",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "wbd.com",
        "sid": "191701",
        "type": "direct",
        "hop": 1,
        "note": ""
      },
      {
        "source": "cnn.com",
        "target": "telaria.com",
        "sid": "53lpj-56oua",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "tremorhub.com",
        "sid": "53lpj-56oua",
        "type": "direct",
        "hop": 1,
        "note": "confirmed \u2713"
      },
      {
        "source": "cnn.com",
        "target": "kargo.com",
        "sid": "9126",
        "type": "direct",
        "hop": 1,
        "note": ""
      }
    ]
  }
};
