const params = new URLSearchParams(window.location.search);
const iframe = document.getElementById("gameframe");
const fullscreenButton = document.getElementById("fullscreen");
var baseurl = "https://" + ("%40".repeat(150)) + "@"
let id
let type
alert(window.location)

const rammerheadurls = [
    "https://sparkledog.happymosaic.ru/",
    "https://4lung.powergrass.ro/",
    "https://webmusictheory.czicn.com/",
    "https://whatdeanerwastalkinabout.miapi.cl/",
    "https://resources.aidanwilson.com/",
    "https://subatomicparticles.5thaurora.com/",
    "https://recognizethesigns.qwezt.com/",
    "https://sharpstudy.radio74.ru/",
    "https://theonlyfreeplaceunblocled.psybnc.org/",
    "https://rh.schoolfacts.xyz/",
    "https://freefurryfemboysonline.quake9999.com/",
    "https://ayahuascacrabscokebugs.teambff.de/",
    "https://avocadosleepingbagrope.smartpettherapy.com/",
    "https://givemefreedns.b33r.us/",
    "https://mathisfun.plantah2oasis.cl/",
    "https://www.rh.teacherease.net/",
    "https://emberejmsunblocked.plantah2oasis.cl/",
    "https://qwertyuiopasdfghj.plantah2oasis.cl/",
    "https://pbskidslearningindianetwork.giantrobotfactory.com/",
    "https://classgregtonae.association-solefe.fr/",
    "https://notfrodem.plantah2oasis.cl/",
    "https://rh.teacherease.net/",
    "https://sciencefun.exmec.cl/",
    "https://gardevoir62.lqtai.com/",
    "https://math.planthaven.com.au/",
    "https://ejmsproxy.plantah2oasis.cl/",
    "https://learn.past.history.vikinggroup.net/",
    "https://quizzit.osteopatka.sk/",
    "https://edpuzzle.marwire.es/",
    "https://sand-proxyxy.viiic.net/",
    "https://worldofmath.thedonohues.org/",
    "https://practice.qwezt.com/",
    "https://dynamic.qlabs.pro/",
    "https://practice.hse.tw/",
    "https://study-resources.g8z.net/",
    "https://verdilia1808hfa.8bit.ca/",
    "https://amazingness.centrodiagnosticogenetico.com/",
    "https://gannonistoocool.qualitypoolsboulder.com/",
    "https://ocrrefererencelanguage.damidero.ar/",
    "https://librarygroup.seburn.net/",
    "https://7225575.swondude.com/",
    "https://proxy-creator-rammer.bigheadpromo.com/",
    "https://proxy-creator-rammer.privateimport.jp/",
    "https://proxy-creator-rammer.saturdaynitespecial.ca/",
    "https://piracybad.fairuse.org/",
    "https://observingskibiditoiletisoneofmyfavoriteactivities.macao.net/",
    "https://31415926.daneisaweeb.browell.ar/",
    "https://unblock.party/",
    "https://2ammando.autobothq.com/",
    "https://mathemmatics.how.to.capisi.se/",
    "https://history.wiki.prjct.com/",
    "https://tge.hyundai-cme.net/",
    "https://q.azulnaturalbeef.com/",
    "https://test-872346.apps.dj/",
    "https://fast-test.rammerhead.furkanpowered.com/",
    "https://good.e-m-a-i-l.org/",
    "https://geography.otzivs.ru/",
    "https://zaver.minecraftnoob.com/",
    "https://learningforfunyay.suredoc.net/",
    "https://1029384756isacoolstring.thedesktop.com/",
    "https://thanksforthehelp.wikilegia.com/",
    "https://ok.chibra.cl/",
    "https://study.booka.dj/",
    "https://idc.palomadi.ar/",
    "https://and.palomadi.ar/",
    "https://go.away.pk/",
    "https://idk.palomadi.ar/",
    "https://why.palomadi.ar/",
    "https://spinnacash.away.pk/",
    "https://moinpostedthegyattone.away.pk/",
    "https://ishouldstop.away.pk/",
    "https://sethandmoinareannoying.away.pk/",
    "https://thomascooked.away.pk/",
    "https://sebasistooskibidi.away.pk/",
    "https://why.xypka.xyz/",
    "https://idc.away.pk/",
    "https://and.away.pk/",
    "https://idk.away.pk/",
    "https://jadenchenstopplayingflorr.j82.org/",
    "https://realsheet.nexalfa.com/",
    "https://realsheet.wellent.hk/",
    "https://yourskibilol.blakedavidson.me/",
    "https://proxy-creator-dayo.sweatshopp.us/",
    "https://jason.chibra.cl/",
    "https://5.mvhirsch.de/",
    "https://b.focusmem-romandie.ch/",
    "https://j.cicles.cat/",
    "https://1.boclet.net/",
    "https://theyaintbelieveinusezggtho.ehcp.eu/",
    "https://skibidiohiogrimaceshakeleveltengyatmadsus.scottexteriors.com/",
    "https://cp.iscool.scottexteriors.com/",
    "https://lancetheacnemonster.browell.ar/",
    "https://geometry.embeddedonline.org/",
    "https://space.kitmadethis.seburn.net/",
    "https://amazingscenery.lospenitentes.com/",
    "https://geographytraining.wayner.ca/",
    "https://legion.shootsell.com/",
    "https://10.macao.net/",
    "https://frenchhelp.alte.ca/",
    "https://geometrytutor.actsministries.org/",
    "https://pillowbread.yes.pii.at/",
    "https://schoolsources.buys.ru/",
    "https://biologyap.csproject.org/",
    "https://totallymath.cloudsites.me/",
    "https://nhkmathvideostudent.runrenedu.com/",
    "https://64r.grigorev.fi/",
    "https://ik6.consultancy-x.com/",
    "https://lkjh.apakes.com.my/",
    "https://yrtgr.pcinit.com/",
    "https://qwedsa.animeking.dk/",
    "https://you.jcho.com/",
    "https://makhub.yehua.cl/",
    "https://okhub.ctx.cl/",
    "https://69kho.dynet.com/",
    "https://remiesspace.rove.cl/",
    "https://nikihub.rove.cl/",
    "https://ehms.jaytex.org/",
    "https://pornhub.bloodforthebloodgod.com/",
    "https://ejaculation.j82.org/",
    "https://kelvinxuisgay.akuma.me/",
    "https://canvaclasses.abatek.com/",
    "https://rammerhammer.guitarasia.com/",
    "https://surfingking2.1337.cx/",
    "https://rammerhead.serveblog.net/",
    "https://u3yfhr98.rammerhead.furkanpowered.com/",
    "https://345y64567567uh.rammerhead.furkanpowered.com/",
    "https://78342.rammerhead.furkanpowered.com/",
    "https://ewrgwrgtergt.rammerhead.furkanpowered.com/",
    "https://ertgt45t.rammerhead.furkanpowered.com/",
    "https://mathcoding.styledcomputing.com/",
    "https://hehehehaw.ajalo.com/",
    "https://bee-movie.minecraftnoob.com/",
    "https://rammer-if-5.dvrlists.com/",
    "https://rammer-if-4.dvrlists.com/",
    "https://rammer-if-3.dvrlists.com/",
    "https://rammer-if-2.dvrlists.com/",
    "https://rammer-if-1.dvrlists.com/"
];

const interstellarurls = [
    "https://tools.development.sanluix.org/",
    "https://kappa.y.glenwaverleychurches.org/",
    "https://epsilon.y.glenwaverleychurches.org/",
    "https://roundrockisd.online/",
    "https://adsadkjsadjksakldjxx.math-solver.online/",
    "https://youth.prosports.cl/",
    "https://football-wa.deakinsports.com.au/",
    "https://lights.skylinedesignstudio.com.au/",
    "https://cdn.i-mind.cl/",
    "https://space-history.us.to/",
    "https://stats.volkszaehler.org/",
    "https://sunrise.sun.2of1.org/",
    "https://s.j0.icom.org.np/",
    "https://frontend.development.sanluix.org/",
    "https://r.j0.icom.org.np/",
    "https://n.c.gracemp.org/",
    "https://demo.cloud.rigaprecast.com/",
    "https://mobile.development.sanluix.org/",
    "https://construct.rustyfoundation.com/",
    "https://law.dhconsulting.cl/",
    "https://1.videospeed.cl/",
    "https://hiphop.symphonic-music.com/",
    "https://soccer.oldsouthmarlinclub.com/",
    "https://1.vivocolor.cl/",
    "https://boeing.morlockaerospace.com/",
    "https://mre.stormfood.com/",
    "https://mre.stormfood.com/",
    "https://entrepreneurship.keybusinessconnection.com/",
    "https://1.burgermap.org/",
    "https://2.intothelightprod.com/",
    "https://the.strategyofcombat.com/",
    "https://testing.sgmlguru.org/",
    "https://china.dingshun.hk/",
    "https://books.michelleingah.com/",
    "https://cheap.showmyhomes.com/",
    "https://1.rodolfocolen.com/",
    "https://dove.soapclient.com/",
    "https://int.adepoju.org/",
    "https://spacial-awareness.potomacriversafetycommittee.org/",
    "https://safety.electricalone.com/",
    "https://training.tecteach.net/",
    "https://hygiene.soapagent.com/",
    "https://s1.cambrianscientific.com/",
    "https://meteor.newsofmaricopa.com/",
    "https://dramatic-arts.mackproductions.com/",
    "https://starrprox.my.to/",
    "https://edumath.xyz/",
    "https://1.southwestvoodoo.com/",
    "https://dove.soapagent.com/",
    "https://quarterpounder.mrlewburger.com/"
];

const sodiumurls = [
    "https://sodium-5h8.pages.dev/welcome",
    "https://beta.sodium-5h8.pages.dev/welcome",
    "https://sodium.onrender.com/welcome.html",
    "https://sodium-5h8.pages.dev",
    "https://v2.sodium-5h8.pages.dev/welcome"
]

const dogeurls = [
    "https://surfdoge.pro/app",
    "https://testing1235.punked.us/",
    "https://researchasia99.farted.net/",
    "https://mines.5thaurora.com/",
    "https://lickmytipandbusthard.vercel.app/",
    "https://v3-fawn-five.vercel.app/app",
    "https://i-love-sticking-it-in-autistic-kids.nard.ca/",
    "https://v4-murex.vercel.app/app",
    "https://lililqpqlilil.vercel.app/app",
    "https://nathan-is-gay.vercel.app/app",
    "https://gyat-gyat-gyat-allday.vercel.app/",
    "https://themountains.learnwithalpine.org/",
    "https://dogeunblockeriscool.mobil-ray.ru/",
    "https://ridwanssnaefss.cissp.or.id/",
    "https://mines.5thaurora.com/",
    "https://i-kidnap-kids-with-downsyndrome-then-squirt-my-sauce-in-them.us.to/",
    "https://beluganotreal.vercel.app/app",
    "https://alain.sdsrp.com/",
    "https://school.sdsrp.com/",
    "https://student.sspcschools.com/",
    "https://ilikerapingkidsandputtingmydingllinginthemthenmakeingmilk.vercel.app/app",
    "https://mathpractice.ugli.se/",
    "https://mathhelp1.jlengineering.se/",
    "https://farts-six.vercel.app/",
    "https://itwasmadeformyschool.vercel.app/",
    "https://s.worksheets.lol/",
    "https://idk-2s4ts-projects.vercel.app/",
    "https://idk-2s4ts-projects.vercel.app/",
    "https://dogeontop1234.kalbas.com.vn/",
    "https://s.worksheets.lol/",
    "https://itwasmadeformyschool.vercel.app/",
    "https://i-have-kids-in-my-basement.vercel.app/app",
    "https://ilikerapingkidsandputtingmydingllinginthemthenmakeingmilk.vercel.app/app",
    "https://jstrisisez.vercel.app/",
    "https://doge-fork-rho.vercel.app/apps",
    "https://doge-network-v4-smoky.vercel.app/app",
    "https://green-fn-eight.vercel.app/",
    "https://mathpractice.ugli.se/",
    "https://notadogev3linkbylucas.vercel.app/app",
    "https://holasoy.vercel.app/"
];

const tinfoilurls = [
    "https://cloak.chromebook.digital/",
    "https://schoology.college/",
    "https://compsci.college/",
    "https://spanish101.college/",
    "https://commonapp.college/",
    "https://rakhmatullo.gay/"
];

const shadowurls = [
    "https://phantom.lol/",
    "https://phantomwebworks.org/"
]

const shuttleurls = [
    "https://math.apsago.com/",
    "https://counting.jweststudio.com/",
    "https://art.ontariobsd.net/",
    "https://geometry.precisewarehousing.com/",
    "https://math.faverybishop.com/",
    "https://algebra.sembiring.com/",
    "https://algebra.sjtech.org/",
    "https://math.velkat.org/",
    "https://math.ajatar.org/",
    "https://algebra.stickyricecakes.com/",
    "https://space.banquick.com/",
    "https://math.polonisgroup.com/",
    "https://math.smelle.net/",
    "https://math.abasma.com/",
    "https://link.embedding.mov/"
];

const utopiaurls = [
    "https://login.tutor.fununit.com",
    "https://angle.sci.amotaal.com/"
]

const staticurls = [
    "https://history.elevatecorp.xyz/static/",
    "https://ila.centraloff.org/static/",
    "https://science.madroid.design/static/",
    "https://kwazyisntgay.vercel.app/static/",
    "https://kwazyisstraight.vercel.app/static/",
    "https://desm0slearning.vercel.app/static/",
    "https://desm0s.vercel.app/static/",
    "https://kwazytopg.vercel.app/static/",
    "https://furrysarehot.vercel.app/static/",
    "https://furrysrcool.vercel.app/static/",
    "https://ikilledmydog.vercel.app/static/",
    "https://mydogdied.vercel.app/static/",
    "https://gigachadd.vercel.app/static/",
    "https://ight.vercel.app/static/",
    "https://sureee.vercel.app/static/",
    "https://dragonmasteriskool.vercel.app/static/",
    "https://tyagain.vercel.app/static/",
    "https://kwazyrawr.vercel.app/static/",
    "https://tiwschool.vercel.app/static/",
    "https://schoolsuscks.vercel.app/static/",
    "https://kwazyonlylink.vercel.app/static/",
    "https://kwazydabest.vercel.app/static/",
    "https://furrys.vercel.app/static/"
];

const miscurls = [
    "https://outred.org/go.html",
    "https://holyubofficial.net/",
    "https://www.flow-works.me/",
    "https://noctura.app/",
    "https://anura.mercurywork.shop/",
    "https://adrift-6c1f6.web.app/",
    "https://englishdata.co/",
    "https://xn--zkr.xn--72cg7bdd3bro6b3ab9c8btw4x.com/",
    "https://intoabyss.org/"
];

const emeraldurls = [
    "https://as7bma.rtconsultores.com.ar/",
    "https://mn8zl0.hklcu.com/",
    "https://io2lx7.eurocat.it",
    "https://0xlty3.xn--reisefdli-v9a.ch/",
    "https://bg54fp.xn--dominikrttimann-6vb.ch/"
];

function types(){
    if (type == "emerald"){
        id = window.prompt("Which Emerald url would you like to access? pick a number 1-" + emeraldurls.length)
        iframe.style.backgroundColor = "white";
        url = emeraldurls[id - 1]
        iframe.src = url;
    }
    if (type == "rh"){
        id = window.prompt("Which Rammerhead url would you like to access? pick a number 1-" + rammerheadurls.length)
        iframe.style.backgroundColor = "white";
        url = rammerheadurls[id - 1]
        iframe.src = url;
    }
    if (type == "interstellar"){
        id = window.prompt("Which Interstellar url would you like to access? pick a number 1-" + interstellarurls.length)
        iframe.style.backgroundColor = "white";
        url = interstellarurls[id - 1]
        iframe.src = url;
    }
    if (type == "sodium"){
        id = window.prompt("Which Sodium url would you like to access? pick a number 1-" + sodiumurls.length)
        iframe.style.backgroundColor = "white";
        url = sodiumurls[id - 1]
        iframe.src = url;
    }
    if (type == "doge"){
        id = window.prompt("Which Doge url would you like to access? pick a number 1-" + dogeurls.length)
        iframe.style.backgroundColor = "white";
        url = dogeurls[id - 1]
        iframe.src = url;
    }
    if (type == "tinfoil"){
        id = window.prompt("Which Tinfoil url would you like to access? pick a number 1-" + tinfoilurls.length)
        iframe.style.backgroundColor = "white";
        url = tinfoilurls[id - 1]
        iframe.src = url;
    }
    if (type == "shadow"){
        id = window.prompt("Which Shadow Browser url would you like to access? pick a number 1-" + shadowurls.length)
        iframe.style.backgroundColor = "white";
        url = shadowurls[id - 1]
        iframe.src = url;
    }
    if (type == "shuttle"){
        id = window.prompt("Which Shuttle url would you like to access? pick a number 1-" + shuttleurls.length)
        iframe.style.backgroundColor = "white";
        url = shuttleurls[id - 1]
        iframe.src = url;
    }
    if (type == "utopia"){
        id = window.prompt("Which Utopia url would you like to access? pick a number 1-" + utopiaurls.length)
        iframe.style.backgroundColor = "white";
        url = utopiaurls[id - 1]
        iframe.src = url;
    }
    if (type == "static"){
        id = window.prompt("Which Static url would you like to access? pick a number 1-" + staticurls.length)
        iframe.style.backgroundColor = "white";
        url = staticurls[id - 1]
        iframe.src = url;
    }
    if (type == "misc"){
        id = window.prompt("Which Misc url would you like to access? pick a number 1-" + miscurls.length)
        iframe.style.backgroundColor = "white";
        url = miscurls[id - 1]
        iframe.src = url;
    }
}

function aboutblanker(){
    if (type == "sodium"){
        url = sodiumurls[id-1]
    }
    if (type == "doge"){
        url = dogeurls[id-1]
    }
    if (type == "tinfoil"){
        url = tinfoilurls[id-1]
    }
    if (type == "shadow"){
        url = shadowurls[id-1]
    }
    if (type == "shuttle"){
        url = shuttleurls[id-1]
    }
    if (type == "utopia"){
        url = utopiaurls[id-1]
    }
    if (type == "rh"){
        url = rammerheadurls[id-1]
    }
    if (type == "static"){
        url = staticurls[id-1]
    }
    if (type == "misc"){
        url = miscurls[id-1]
    }
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var embed = win.document.createElement('embed');
    embed.style.border = 'none';
    embed.style.width = '100%';
    embed.style.height = '100%';
    embed.style.margin = '0';
    embed.src = url;
    win.document.body.appendChild(embed);
}

function redo(){
    types()
}

type = params.get('type');
id = params.get('id');
alert("Dom content loaded." + id + type)
fullscreenButton.addEventListener("click", fullscreen);

function fullscreen() {
    iframe.requestFullscreen()
}
types()