const head = document.getElementById("head");
const games = document.getElementById("games");

const params = new URLSearchParams(window.location.search);
let currentmethod = params.get('method');

if (currentmethod == "pdfopunblocker") {
    loadtext("PDF Op Unblocker", "What this site *was* named after! /n Okay, step 1. go to google docs click blank document. /n Step 2 paste in a url, select it, click the url icon (looks like a chain) at the top of the site. /n Step 3 go to file, download, PDF Document. (hence the name) /n Go to your files open the PDF and click the url, now your done :D /n This should work like 95% of the time, the '@PDF Exploit' has the same limitations as it but is more streamlined. /n PS: OP stands for 'One Page' meaning it unblocks one page at a time and may break when going to other sub URLs.")
}
if (currentmethod == "disablesecurly") {
    loadtext("Disable Securly", "I could care less if this gets patched so if you want new workarounds find em yourself. /n Before you start bookmark these tabs (If you have certain tabs from the other tutorials no need to make more): 'chrome://shorthang', 'chrome://extensions/?id=iheobagjkfklnlikgihanlhcddjoihkg', 'chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/manifest.json' OR 'chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/_generated_background_page.html' /n Very short tutorial so you can hopefully understand it. Heres some things before we start, we use chrome://shorthang because chrome://hang is disabled. When I say OR i'm saying the guide can be followed with either of the urls interchangeably (I recommend manifest.json if you can though) /n Open up your chrome-extension url and shorthang it once, now you need to do this quickly, right click the tab duplicate it and open your chrome://extension tab scroll down and click the switch. /n You need to keep being fast here, go back to your chrome-extension tab and spam shorthangs. each shorthang adds about 15-20 seconds to your 'timer' of how long your unblocked for, spam it as much as you'd want but be careful because if you spam it too much at once everything will hang and you won't be able to visit new sites, to fix this sign out and sign back into your chromebook.")
}
if (currentmethod == "disablegoguardian") {
    loadtext("Disable GoGuardian", "I could care less if this gets patched so if you want new workarounds find em yourself. /n Before you start bookmark these tabs (If you have certain tabs from the other tutorials no need to make more): 'chrome://shorthang', 'chrome://extensions/?id=haldlgldplgnggkjaafhelgiaglafanh', 'chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/manifest.json' OR 'chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/_generated_background_page.html' /n Very short tutorial so you can hopefully understand it. Heres some things before we start, we use chrome://shorthang because chrome://hang is disabled. When I say OR i'm saying the guide can be followed with either of the urls interchangeably (I recommend manifest.json if you can though) /n Open up your chrome-extension url and shorthang it once, now you need to do this quickly, right click the tab duplicate it and open your chrome://extension tab scroll down and click the switch. /n You need to keep being fast here, go back to your chrome-extension tab and spam shorthangs. each shorthang adds about 15-20 seconds to your 'timer' of how long your unblocked for, spam it as much as you'd want but be careful because if you spam it too much at once everything will hang and you won't be able to visit new sites, to fix this sign out and sign back into your chromebook.")
}
if (currentmethod == "goguardianabblocker") {
    loadtext("GoGuardian AB Blocker", "How to prevent go guardian from seeing about:blank or file urls :D /n Sorry this isn't a streamlined process, you can't really do that. /n Okay, step 1. go to chrome://extensions and scroll down til you see 'GoGuardian'. /n Note: if it doesn't appear make sure your doing this on your chromebook. not a computer logged into your account. /n Step 2 (final step), scroll down and make sure 'Allow access to file URLs' is set to false. /n Boom, your done. now goguardian can't see any tabs with both file urls or about:blank urls (classroom6x uses them)")
}
if (currentmethod == "kioskv3") {
    loadtext("KioskV3", "Step 1 Sign out of your chromebook. /n Step 2 Go to apps in the bottom left and open edulastic /n Step 3 Sign in with microsoft and log into your microsoft account /n Step 4 Search anything in the top right of the screen /n Step 5 Hover over 'sitemap' in the top right of the screen click 'view sitemap' scroll down and under services click 'Bing' /n Congrats, you've unblocked everything on your chromebook :)")
}
if (currentmethod == "kioskv4") {
    loadtext("KioskV4", "Step 1 Sign out of your chromebook. /n Step 2 Go to apps in the bottom left and open edulastic /n Step 3 Sign in with office 365 and click sign in options, click github then click docs. /n Step 4 scroll down to the bottom of the docs page and click blog. /n Step 5 scroll down to the bottom of the blog page and in the bottom right click on the github icon /n Step 6 in the search box on the top right side of the screen type in 'owner:uniub' and click enter /n Step 7 click on the one that says kioskexploiturls and click the link provided. /n Congrats :) you have unblocked your chromebook again <3")
}
if (currentmethod == "goguardianytbypass") {
    loadtext("Goguard YT bypass", "A quick and easy bypass for youtube that works on most versions of GoGuardian. /n Made by me :) /n !if!/methods/GGyt/index.html!if! /n !a!!d!/methods/GGyt/index.html!a!Download /n !a!!d!/methods/GGyt/dataurl.txt!a!Dataurl")
}
if (currentmethod == "goguardianembedbypass") {
    loadtext("Goguard embed bypass", "Simple bypass that should bypass most versions of GoGuardian (Embeddable sites only). /n Made by me :) /n !if!/methods/GGembed/index.html!if! /n !a!!d!/methods/GGembed/index.html!a!Download /n !a!!d!/methods/GGembed/dataurl.txt!a!Dataurl")
}
if (currentmethod == "andpdfv2") {
    loadtext("@PDF v2", "Another simple bypass but for securly, one page only. /n Made by me :) /n !if!/methods/andpdfv2/index.html!if! /n !a!!d!/methods/andpdfv2/index.html!a!Download /n !a!!d!/methods/andpdfv2/dataurl.txt!a!Dataurl")
}
if (currentmethod == "codns") {
    loadtext("CaNdus", "Works on some networks, but when it does its EVERYTHING /n Go to chrome://network#state /n find the wifi you are connected to. /n Press the plus by it, and copy everything inside the box that just showed up. /n Paste it inside the input on this website. /n !if!/methods/caudns/index.html!if! /n To start the exploit go to chrome://network, scroll all the way down and import kill.onc /n To turn securly back on import revive.onc /n !a!!d!/methods/caudns/index.html!a!Download")
}
if (currentmethod == "rigtools") {
    loadtext("RigTools", "This is an [ADVANCED] exploit, this will take a bit of effort (but trust me, its worth it ;) /n Before doing anything, make sure you fill these 3 requirements /n 1. You have a chrome version less than v128 (check in chrome://about:) /n 2. Go to 'devtools://devtools/bundled/devtools_app.html' and make sure its not blocked. /n 3. You have an extension installed with the permission 'Manage your apps, extensions, and themes' (Check chrome://extensions details) /n Known working extensions: 'GoGuardian' **NEW UPD: You can now use extension id `gndmhdcefbhlchkhipcnnbkcmicncehk` and it will work on ANY enrolled device!** /n Okay, nice! You're able to do the exploit! Now, what your going to do, is after you've found the extension that has the 'Manage your apps, extensions, and themes' permission, go to the url and copy the entire part after 'chrome://extensions/?id=' you will need this later. /n Now, your going to go to one of these URLs, if one doesn't work, try the other, or use the first url which is custom host by UniUB and has custom features! /n devtools://devtools/bundled/devtools_app.html?experiments=true&wss=6cxqxy-8080.csb.app (If your using this url, follow the next steps and then use payload 7, its custom made for the site) /n devtools://devtools/bundled/devtools_app.html?experiments=true&ws=nhqqkp-8080.csb.app /n devtools://devtools/bundled/devtools_app.html?experiments=true&ws=immortal2willlose.xyz:5505 /n devtools://devtools/bundled/devtools_app.html?experiments=true&ws=tutoring.rainetax.com:5505/rig /n devtools://devtools/bundled/devtools_app.html?experiments=true&ws=schooling.sabe.com.ar:5505/rig /n devtools://devtools/bundled/devtools_app.html?experiments=true&ws=rigtools.appleflyer.xyz /n devtools://devtools/bundled/devtools_app.html?experiments=true&wss=rig.ccsd.store /n devtools://devtools/bundled/devtools_app.html?experiments=true&ws=sincereham222.cc:8080 /n devtools://devtools/bundled/devtools_app.html?experiments=true&ws=rigtools.appleflyer.xyz:5506 /n devtools://devtools/bundled/devtools_app.html?experiments=true&wss=rwpk9g-8080.csb.app /n On the top bar of the window that opened, (It should say 'Elements Console Sources Network Performance Memory Application Security Lighthouse Recorder Performance insights' Click on 'Network' /n A small box on the middle left side of the screen in the 'Name' category should be there, its 'Status' should be '(pending)', Double click this and wait 1-3 seconds. /n If a wierd looking window opens, yay! the exploit worked :) you should be in the clear for the exploit bugging out now. /n Take the id you got in the first step (The extension id), press 'q' on your keyboard while in the newly opened tab, paste in that id and hit enter. /n Okay, a new window should've opened from the new window, this window will either have a list of extensions with blue buttons to disable them (In that case just click the ones you want to enable or disable) OR it will be a textbox with a button that says the extension id of the extension you'd like to disable. In this case get the extension id from chrome://extensions and paste it there. /n Done! You should be able to disable EVERYTHING, once again though, I'm not responsible for anything that happens when using this exploit.")
}
if (currentmethod == "mitappinventor"){
    loadtext("Mit AI2 Exploit", "This is a pretty advanced exploit, not as advanced as rigtools but can be pretty hard to pull off. /n Requirements /n code.appinventor.mit.edu is unblocked (or you have another machine to temporarily use) /n The app 'MIT AI2 Companion' is allowed on the playstore. /n Step one, download the custom built app inventor file /n !a!!d!/methods/mitappinventor/mitappinventor.aia!a!Download /n Go to the url listed in the requirements, and click 'Continue Without An Account' Click through the popups. /n Now on the top navbar, click 'Projects' Then import a .aia 'From your computer' /n Once imported, click the 'Connect' option and select either 'Chromebook' or 'AI Companion', if your using Chromebook it should automatically open, if your using AI Companion, open the app you installed in the requirements, and use the code provided.")
}
if (currentmethod == "exthang3r"){
    loadtext("ExtHang3r", "A very simple and handy exploit. /n Follow the instructions inside the box below. /n If the exploit stops working (It usually only lasts around 5-15 minutes) just redo it. /n !if!/methods/exthang3r.html!if!")
}

function loadtext(title, text){ //Don't mind the garbo code, it works 😎
    text = text.split(" /n ")
    head.innerHTML = title;
    for (let i = 0; i < text.length; i++){
        if (text[i].slice(0,3) === "!a!"){//<a>
            let href = text[i].split('!a!')[1]
            let atext = text[i].split("!a!")[2]
            let elem = document.createElement("a")
            let headerelem = document.createElement("h2")
            if (href.slice(0,3) === "!d!"){ elem.download = ""; href = href.substring(3) }
            elem.href = href
            headerelem.innerHTML = atext
            elem.setAttribute("class", "padding")
            elem.appendChild(headerelem)
            games.appendChild(elem)
        } else if(text[i].slice(0,4) === "!if!"){//<iframe>
            let src = text[i].split('!if!')[1]
            let elem = document.createElement("embed")
            elem.src = filesURL + src
            elem.setAttribute("class", "padding")
            games.appendChild(elem)
        }else{//<p>
            let elem = document.createElement("h2")
            elem.setAttribute("class", "padding")
            elem.innerHTML = text[i]
            games.appendChild(elem)
        }
    }
}
