/**
 * Array of Objects
 */
const translations = [
  {
    word: "Registration",
    replacedWord: "నమోదు చేయడానికి"
  },
  {
    word: "Lakh",
    replacedWord: "లక్షలు"
  },
  {
    word: "Doses",
    replacedWord: "మోతాదు"
  },
  {
    word: "Dose",
    replacedWord: "మోతాదు"
  },
  {
    word: "Vaccinated",
    replacedWord: "టీకాలు"
  },
  {
    word: "AEFI Reported",
    replacedWord: "AEFI నివేదించబడింది"
  },

  {
    word: "Where can I register for COVID-19 vaccination?",
    replacedWord: "COVID-19 టీకా కోసం నేను ఎక్కడ నమోదు చేయవచ్చు?"
  },
  {
    word: "You can log into the Co-WIN portal using the link",
    replacedWord:
      "మీరు www.cowin.gov.in లింక్‌ను ఉపయోగించి కో-విన్ పోర్టల్‌లోకి లాగిన్ అవ్వవచ్చు"
  },
  {
    word: " and click on the “Register/Sign In yourself” tab to register for COVID-19 vaccination.",
    replacedWord:
      "మరియు COVID-19 టీకా కోసం నమోదు చేయడానికి “మీరే నమోదు చేసుకోండి / సైన్ ఇన్ చేయండి” టాబ్ పై క్లిక్ చేయండి."
  },
  {
    word: "Is there a mobile app that needs to be installed to register for vaccination?",
    replacedWord:
      "టీకా కోసం నమోదు చేయడానికి మొబైల్ అనువర్తన ఇన్‌స్టాల్ అవసరం ఉందా?"
  },
  {
    word: "Is online registration mandatory for Covid 19 vaccination?",
    replacedWord: "కోవిడ్ 19 టీకా కోసం ఆన్‌లైన్ నమోదు తప్పనిసరి?"
  },
  {
    word: " Vaccination Centres provide for a limited number of on-spot registration slots every day. Citizens aged 45 years and above can schedule appointments online or walk-in to vaccination centres. However, Citizens aged 18-44 years should mandatorily register themselves and schedule appointment online before going to vaccination centre. ",
    replacedWord:
      "టీకా కేంద్రాలు ప్రతిరోజూ పరిమిత సంఖ్యలో ఆన్-స్పాట్ రిజిస్ట్రేషన్ స్లాట్‌లను అందిస్తాయి. 45 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న పౌరులు ఆన్‌లైన్‌లో నియామకాలను షెడ్యూల్ చేయవచ్చు లేదా టీకా కేంద్రాలకు నడవవచ్చు. అయినప్పటికీ, 18-44 సంవత్సరాల వయస్సు గల పౌరులు తమను తాము నమోదు చేసుకోవాలి మరియు ఆన్‌లైన్‌లో నియామకాన్ని షెడ్యూల్ చేయాలి టీకా కేంద్రానికి వెళ్ళే ముందు."
  },
  {
    word: "In general, all citizens are recommended to register online and schedule vaccination in advance for a hassle-free vaccination experience.",
    replacedWord:
      "సాధారణంగా, పౌరులందరూ ఆన్‌లైన్‌లో నమోదు చేసుకోవాలని మరియు ఇబ్బంది లేని టీకా అనుభవం కోసం టీకా ముందుగానే షెడ్యూల్ చేయాలని సిఫార్సు చేస్తారు."
  },
  {
    word: "There is no authorised mobile app for registering for vaccination in India except Aarogya Setu. You need to log into the Co-WIN portal. Alternatively, you can also register for vaccination through the Aarogya Setu App.",
    replacedWord:
      "ఆరోగ్య సేతు తప్ప భారతదేశంలో టీకా కోసం నమోదు చేయడానికి అధీకారిత మొబైల్ app లేదు. మీరు కో-విన్ పోర్టల్‌లోకి లాగిన్ అవ్వాలి. ప్రత్యామ్నాయంగా, మీరు ఆరోగ్య సేతు యాప్ ద్వారా టీకా కోసం నమోదు చేసుకోవచ్చు."
  },
  {
    word: "Which age groups can register for vaccination on the Co-WIN portal?",
    replacedWord: "కో-విన్ పోర్టల్‌లో టీకా కోసం ఏ వయసు వారు నమోదు చేసుకోవచ్చు?"
  },
  {
    word: "All citizens aged 18 years and above can register for vaccination",
    replacedWord:
      "18 సంవత్సరాల మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న పౌరులందరూ టీకా కోసం నమోదు చేసుకోవచ్చు"
  },
  {
    word: "How many people can be registered in the Co-WIN portal through one mobile number?",
    replacedWord:
      "ఒక మొబైల్ నంబర్ ద్వారా కో-విన్ పోర్టల్‌లో ఎంత మందిని నమోదు చేసుకోవచ్చు?"
  },
  {
    word: "Up to 4 people can be registered for vaccination using the same mobile number.",
    replacedWord:
      "ఒకే మొబైల్ నంబర్ ఉపయోగించి టీకా కోసం 4 మంది వరకు నమోదు చేసుకోవచ్చు"
  },
  {
    word: "How can citizens with no access to smart phones or computers manage online registration?",
    replacedWord:
      "స్మార్ట్ ఫోన్లు లేదా కంప్యూటర్లకు అందుబాటు లేని పౌరులు ఆన్‌లైన్ నమోదును ఎలా నిర్వహించగలరు?"
  },
  {
    word: "Up to 4 people can be registered for vaccination using the same mobile number",
    replacedWord:
      "ఒకే మొబైల్ నంబర్ ఉపయోగించి టీకా కోసం 4 మంది వరకు నమోదు చేసుకోవచ్చు"
  },
  {
    word: "Citizens can take help from friends or family for online registration",
    replacedWord:
      "ఒక పౌరులు ఆన్‌లైన్ రిజిస్ట్రేషన్ కోసం స్నేహితులు లేదా కుటుంబ సభ్యుల సహాయం తీసుకోవచ్చు"
  },
  {
    word: "Can I register for vaccination without Aadhaar card?",
    replacedWord: "ఆధార్ కార్డు లేకుండా టీకా కోసం నేను నమోదు చేయవచ్చా"
  },
  {
    word: "Yes, you can register on Co-WIN portal using any of the following ID proofs",
    replacedWord:
      "అవును, మీరు కింది ఐడి ప్రూఫ్‌లను ఉపయోగించి కో-విన్ పోర్టల్‌లో నమోదు చేసుకోవచ్చు"
  },
  {
    word: "Aadhaar card",
    replacedWord: "ఆధార్ కార్డు"
  },
  {
    word: "Driving License",
    replacedWord: "డ్రైవింగ్ లైసెన్స్"
  },
  {
    word: "PAN card",
    replacedWord: "పాన్ కార్డు"
  },
  {
    word: "Passport",
    replacedWord: "పాస్పోర్ట్"
  },
  {
    word: "Pension Passbook",
    replacedWord: "పెన్షన్ పాస్బుక్ "
  },
  {
    word: "NPR Smart Card",
    replacedWord: "ఎన్‌పిఆర్ స్మార్ట్ కార్డ్"
  },
  {
    word: "Voter ID",
    replacedWord: "ఓటరు ID"
  },
  {
    word: "Is there any registration charges to be paid?",
    replacedWord: "చెల్లించాల్సిన రిజిస్ట్రేషన్ ఛార్జీలు ఉన్నాయా?"
  },
  {
    word: "No. There is no registration charge.",
    replacedWord: "రిజిస్ట్రేషన్ ఛార్జీ లేదు."
  },
  {
    word: "Whom do I contact in case of side effects from vaccination",
    replacedWord:
      "రిపోర్టింగ్ దుష్ప్రభావాలు టీకా నుండి దుష్ప్రభావాల విషయంలో నేను ఎవరిని సంప్రదించాలి"
  },
  {
    word: " Why do I need a vaccination certificate?",
    replacedWord: "వ్యాక్సిన్ సర్టిఫికేట్ నాకు టీకా సర్టిఫికేట్ ఎందుకు అవసరం?"
  },
  {
    word: " A COVID Vaccine Certificate (CVC) issued by the government offers an assurance to the beneficiary on the vaccination, type of vaccine used, and the provisional certificate also provides the next vaccination due",
    replacedWord:
      "ప్రభుత్వం జారీ చేసిన COVID వ్యాక్సిన్ సర్టిఫికేట్ (సివిసి) టీకాలు వేయడం, ఉపయోగించిన వ్యాక్సిన్ రకంపై లబ్ధిదారునికి హామీ ఇస్తుంది మరియు తాత్కాలిక ధృవీకరణ పత్రం తదుపరి టీకాను కూడా అందిస్తుంది"
  },
  {
    word: "It also is an evidence for the citizen to prove to any entities which may require proof of vaccination specially in case of travel",
    replacedWord:
      "రయాణ విషయంలో ప్రత్యేకంగా టీకా రుజువు అవసరమయ్యే ఏదైనా సంస్థలకు పౌరుడు నిరూపించడానికి ఇది ఒక సాక్ష్యం.  టీకాలు వేయడం వలన వ్యక్తులను వ్యాధి నుండి రక్షించడమే కాకుండా, వైరస్ వ్యాప్తి చెందే ప్రమాదాన్ని కూడా తగ్గిస్తుంది"
  },
  {
    word: "Vaccination not only protects individuals from disease, but also reduces their risk of spreading the virus. Therefore, there could be a requirement in future to produce certificate for certain kind of social interactions and international travel. ",
    replacedWord:
      "టీకాలు వేయడం వలన వ్యక్తులను వ్యాధి నుండి రక్షించడమే కాకుండా, వైరస్ వ్యాప్తి చెందే ప్రమాదాన్ని కూడా తగ్గిస్తుంది.  అందువల్ల, భవిష్యత్తులో కొన్ని రకాల సామాజిక పరస్పర చర్యలకు మరియు అంతర్జాతీయ ప్రయాణాలకు ధృవీకరణ పత్రాన్ని ఉత్పత్తి చేయవలసిన అవసరం ఉంది.  ఈ సందర్భంలో కో-విన్ జారీ చేసిన సర్టిఫికేట్ భద్రతా లక్షణాలలో నిర్మించబడింది, ఇది కో-విన్ పోర్టల్‌లో అందించబడిన ఆమోదించబడిన యుటిలిటీలను ఉపయోగించి డిజిటల్‌గా ధృవీకరించబడే సర్టిఫికేట్ యొక్క యథార్థతకు హామీ ఇస్తుంది."
  },
  {
    word: "Therefore, there could be a requirement in future to produce certificate for certain kind of social interactions and international travel. ",
    replacedWord:
      "అందువల్ల, భవిష్యత్తులో కొన్ని రకాల సామాజిక పరస్పర చర్యలకు మరియు అంతర్జాతీయ ప్రయాణాలకు ధృవీకరణ పత్రాన్ని ఉత్పత్తి చేయవలసిన అవసరం ఉంది.  ఈ సందర్భంలో కో-విన్ జారీ చేసిన సర్టిఫికేట్ భద్రతా లక్షణాలలో నిర్మించబడింది, ఇది కో-విన్ పోర్టల్‌లో అందించబడిన ఆమోదించబడిన యుటిలిటీలను ఉపయోగించి డిజిటల్‌గా ధృవీకరించబడే సర్టిఫికేట్ యొక్క యథార్థతకు హామీ ఇస్తుంది."
  },
  {
    word: "Who is responsible for providing the vaccination certificate?",
    replacedWord: "టీకా సర్టిఫికేట్ ఇవ్వడానికి ఎవరు బాధ్యత వహిస్తారు?"
  },
  {
    word: "The Vaccination Centre is responsible for generating your certificate and for providing a printed copy post vaccination on the day of vaccination itself. Please do insist on receiving the certificate at the Centre. For Private Hospitals, the charges for providing a printed copy of the certificate are included in the service charge for vaccination.",
    replacedWord:
      "టీకా కేంద్రం మీ సర్టిఫికెట్‌ను రూపొందించడానికి మరియు టీకా చేసిన రోజునే ప్రింటెడ్ కాపీ పోస్ట్ టీకాను అందించడానికి బాధ్యత వహిస్తుంది.  దయచేసి కేంద్రంలో సర్టిఫికేట్ పొందాలని పట్టుబట్టండి.  ప్రైవేట్ ఆసుపత్రుల కోసం, సర్టిఫికేట్ యొక్క ముద్రిత కాపీని అందించే ఛార్జీలు టీకా కోసం సేవా ఛార్జీలో చేర్చబడ్డాయి."
  },
  {
    word: "Where can I download vaccination certificate from?",
    replacedWord: "టీకా సర్టిఫికెట్‌ను నేను ఎక్కడ నుండి డౌన్‌లోడ్ చేసుకోగలను?"
  },
  {
    word: "Vaccination",
    replacedWord: "టీకా"
  },
  {
    word: "Vaccine Certificate",
    replacedWord: "వ్యాక్సిన్ సర్టిఫికేట్"
  },
  {
    word: "Reporting Side effects",
    replacedWord: "దుష్ప్రభావాలను నివేదించడం"
  },
  {
    word: "You can download vaccination certificate from the Co-WIN portal (cowin.gov.in) or the Aarogya Setu app or through Digi-Locker by following the simple steps.",
    replacedWord:
      "మీరు కో-విన్ పోర్టల్ (cowin.gov.in) లేదా ఆరోగ్య సేతు అనువర్తనం నుండి లేదా డిజి-లాకర్ ద్వారా టీకా-సర్టిఫికేట్ను సాధారణ దశలను అనుసరించి డౌన్‌లోడ్ చేసుకోవచ్చు."
  },
  {
    word: " You may do so by using the mobile number used at the time of registration. ",
    replacedWord:
      "రిజిస్ట్రేషన్ సమయంలో ఉపయోగించిన మొబైల్ నంబర్‌ను ఉపయోగించడం ద్వారా మీరు అలా చేయవచ్చు."
  },
  {
    word: "In this context the certificate issued by Co-WIN has built in security features to guarantee genuineness of the certificate which can be digitally verified using approved utilities which are provided in Co-WIN portal.",
    replacedWord:
      "ఈ సందర్భంలో, కో-విన్ జారీ చేసిన సర్టిఫికేట్ భద్రతా లక్షణాలలో నిర్మించబడింది, ఇది కో-విన్ పోర్టల్‌లో అందించబడిన ఆమోదించబడిన యుటిలిటీలను ఉపయోగించి డిజిటల్‌గా ధృవీకరించబడే సర్టిఫికెట్ యొక్క యథార్థతకు హామీ ఇస్తుంది."
  },
  {
    word: "Is vaccination free at all vaccination centres?",
    replacedWord: "టీకా అన్ని టీకా కేంద్రాలలో టీకా ఉచితం?"
  },
  {
    word: " No. Currently, vaccination is free at Government hospitals and charged at INR 250 in Private hospitals for citizens aged 45 years and above.",
    replacedWord:
      "ప్రస్తుతం, ప్రభుత్వ ఆసుపత్రులలో టీకా ఉచితం మరియు 45 సంవత్సరాల మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న పౌరులకు ప్రైవేట్ ఆసుపత్రులలో 250 రూపాయలు వసూలు చేస్తారు."
  },
  {
    word: "From 1st May onwards, the Vaccination for people of 45 years or more will continue to be free at the Government facilities",
    replacedWord:
      "మే 1 వ తేదీ నుండి, 45 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు ఉన్నవారికి టీకాలు వేయడం ప్రభుత్వ సౌకర్యాల వద్ద ఉచితంగా కొనసాగుతుంది."
  },
  {
    word: "For people between 18 to 44 years the States will announce the policy relating to payment. Vaccination will be priced by private facilities and you can see the price of each vaccine at the time of booking. ",
    replacedWord:
      "18 నుండి 44 సంవత్సరాల మధ్య ఉన్నవారికి, చెల్లింపులకు సంబంధించిన విధానాన్ని రాష్ట్రాలు ప్రకటిస్తాయి.  టీకాకు ప్రైవేట్ సదుపాయాల ద్వారా ధర నిర్ణయించబడుతుంది మరియు బుకింగ్ సమయంలో ప్రతి టీకా ధరను మీరు చూడవచ్చు."
  },
  {
    word: "Vaccination will be priced by private facilities and you can see the price of each vaccine at the time of booking. ",
    replacedWord:
      "టీకాకు ప్రైవేట్ సదుపాయాల ద్వారా ధర నిర్ణయించబడుతుంది మరియు బుకింగ్ సమయంలో ప్రతి టీకా ధరను మీరు చూడవచ్చు."
  },
  {
    word: " The Vaccination Centres have been directed to ensure that if a citizen is being vaccinated with 2nd dose, they should confirm that the first dose vaccination was done with the same vaccine as is being offered at the time of second dose and that the first dose was administered more than 28 days ago.",
    replacedWord:
      "ఒక పౌరుడికి 2 వ మోతాదుతో టీకాలు వేస్తున్నట్లయితే, రెండవ మోతాదు సమయంలో అందించబడుతున్న అదే వ్యాక్సిన్‌తో మొదటి మోతాదు వ్యాక్సిన్ చేయబడిందని మరియు మొదటి మోతాదు ఇవ్వబడిందని వారు నిర్ధారించాలని టీకా కేంద్రాలకు ఆదేశాలు ఇవ్వబడ్డాయి 28 రోజుల క్రితం."
  },
  {
    word: "You should share the correct information about the vaccine type and the date of 1st dose vaccination with the vaccinator.",
    replacedWord:
      "28 రోజుల క్రితం. టీకా రకం మరియు 1 వ మోతాదు టీకా తేదీ గురించి సరైన సమాచారాన్ని మీరు టీకాతో పంచుకోవాలి."
  },
  {
    word: "You should carry your vaccine certificate issued after the first dose.",
    replacedWord:
      "మొదటి మోతాదు తర్వాత జారీ చేసిన మీ టీకా సర్టిఫికెట్‌ను మీరు తీసుకెళ్లాలి."
  },
  {
    word: "Can I check the price of the vaccine?",
    replacedWord: "నేను టీకా ధరను తనిఖీ చేయవచ్చా?"
  },
  {
    word: "Frequently Asked Questions on Co-WIN ",
    replacedWord: "కో-విన్‌పై తరచుగా అడిగే ప్రశ్నలు"
  },
  {
    word: "Yes. The System will show the price of the vaccine below the name of the vaccination centre at the time of scheduling an appointment.",
    replacedWord:
      "అవును.  నియామకంపై షెడ్యూల్ చేసే సమయంలో టీకా కేంద్రం పేరు క్రింద వ్యాక్సిన్ ధరను సిస్టమ్ చూపిస్తుంది"
  },
  {
    word: "Can I choose the vaccine?",
    replacedWord: "నేను వ్యాక్సిన్ ఎంచుకోవచ్చా?"
  },
  {
    word: "System will show the vaccine being administered in each vaccination centre at the time of scheduling an appointment. Citizen can choose the vaccination centre as per their choice of vaccine being administered However, the choice will not be available at the Government facilities .",
    replacedWord:
      "ఒక నియామకాన్ని షెడ్యూల్ చేయబడిన సమయంలో ప్రతి టీకా కేంద్రంలో టీకాని నిర్వహించడం వ్యవస్థను చూపుతుంది. పౌరుడు టీకా యొక్క ఎంపిక ఎంపిక ప్రకారం టీకా సెంటర్ను ఎంచుకోవచ్చు, అయితే ప్రభుత్వ సౌకర్యాలపై ఎంపిక అందుబాటులో ఉండదు."
  },
  {
    word: "What precautions should I take at the time of 2nd dose vaccination?",
    replacedWord: "2 వ డోస్ టీకాల సమయంలో నేను ఏ జాగ్రత్తలు తీసుకోవాలి?"
  },
  {
    word: "The Vaccination Centres have been directed to ensure that if a citizen is being vaccinated with 2nd dose, they should confirm that the first dose vaccination was done with the same vaccine as is being offered at the time of second dose and that the first dose was administered more than 28 days ago. You should share the correct information about the vaccine type and the date of 1st dose vaccination with the vaccinator. You should carry your vaccine certificate issued after the first dose.",
    replacedWord:
      "ఒక పౌరుడికి 2 వ మోతాదుతో టీకాలు వేస్తున్నట్లయితే, రెండవ మోతాదు సమయంలో అందించబడుతున్న అదే వ్యాక్సిన్‌తో మొదటి మోతాదు టీకాలు వేయబడ్డారని మరియు మొదటి మోతాదు ఇవ్వబడిందని వారు నిర్ధారించాలని టీకా కేంద్రాలకు ఆదేశాలు ఇవ్వబడ్డాయి. 28 రోజుల క్రితం. టీకా రకం మరియు 1 వ మోతాదు టీకా తేదీ గురించి సరైన సమాచారాన్ని మీరు టీకాతో పంచుకోవాలి. మొదటి మోతాదు తర్వాత జారీ చేసిన మీ టీకా సర్టిఫికెట్‌ను మీరు తీసుకెళ్లాలి."
  },
  {
    word: "Can I get vaccinated with 2nd dose in a different State/District?",
    replacedWord: "నేను వేరొక రాష్ట్రంలో / జిల్లాలో 2 వ  dose టీకాలు పొందగలనా?"
  },
  {
    word: "Yes, you can get vaccinated in any State/District. The only restriction is that you will be able to get vaccinated only on those centres which are offering the same vaccine as was administered to you on your first dose.",
    replacedWord:
      "అవును, మీరు ఏ రాష్ట్రంలో / జిల్లాలో టీకాలు పొందవచ్చు. మీ పరిమితిపై మీరు నిర్వహించిన అదే టీకాను అందించే ఆ కేంద్రాలలో మాత్రమే టీకాలు తీసుకోవచ్చని మాత్రమే పరిమితి మాత్రమే."
  },
  {
    word: "Which documents should I carry with me for vaccination?",
    replacedWord: "టీకా కోసం నేను ఏ పత్రాలను నాతో తీసుకెళ్లాలి?"
  },
  {
    word: "You should carry your identity proof specified by you at the time of registration on the Co-WIN portal and a printout/screenshot of your appointment slip.",
    replacedWord:
      "కో-విన్ పోర్టల్‌లో రిజిస్ట్రేషన్ సమయంలో మీరు పేర్కొన్న మీ గుర్తింపు రుజువును మరియు మీ అపాయింట్‌మెంట్ స్లిప్ యొక్క ప్రింటౌట్ / స్క్రీన్ షాట్‌ను మీరు తీసుకెళ్లాలి."
  },
  {
    word: "I have registered myself on Co-Win portal. However, I am not able to make any booking as I do not see any vaccination facility near my location?",
    replacedWord:
      "నేను కో-విన్ పోర్టల్‌లో నన్ను నమోదు చేసుకున్నాను.  అయినప్పటికీ, నా స్థానానికి సమీపంలో ఎటువంటి టీకా సౌకర్యం కనిపించనందున నేను ఎటువంటి బుకింగ్ చేయలేను?"
  },
  {
    word: " Yes, it is possible that no facility near your place has published their vaccination program as yet. You may wait for some time till vaccination facilities near your place are onboarded on Co-Win platform, become active and start their services.",
    replacedWord:
      " అవును, మీ స్థలానికి సమీపంలో ఉన్న ఏ సదుపాయం వారి టీకా కార్యక్రమాన్ని ఇంకా ప్రచురించలేదు.  మీ స్థలానికి సమీపంలో ఉన్న టీకా సౌకర్యాలు కో-విన్ ప్లాట్‌ఫామ్‌లో ఆన్‌బోర్డ్ అయ్యే వరకు మీరు కొంత సమయం వేచి ఉండవచ్చు, చురుకుగా ఉండి వారి సేవలను ప్రారంభించండి."
  },
  {
    word: "2nd dose scheduling",
    replacedWord: "రెండవ మోతాదు షెడ్యూలింగ్"
  },
  {
    word: "Is it necessary to take 2nd dose of vaccination?",
    replacedWord: "టీకా 2 వ డోస్ తీసుకోవడం అవసరమా?"
  },
  {
    word: "Yes. It is recommended that both doses of vaccine should be taken for realising the full benefit of vaccination. Both doses must be of the same vaccine type.",
    replacedWord:
      "అవును.  టీకా యొక్క పూర్తి ప్రయోజనాన్ని గ్రహించడానికి రెండు మోతాదుల వ్యాక్సిన్ తీసుకోవాలని సిఫార్సు చేయబడింది.  రెండు మోతాదులు ఒకే టీకా రకాన్ని కలిగి ఉండాలి."
  },
  {
    word: "When should I take the 2nd dose of vaccination?",
    replacedWord: "టీకా యొక్క 2 వ మోతాదును నేను ఎప్పుడు తీసుకోవాలి?"
  },
  {
    word: "Will my 2nd dose appointment be automatically scheduled by Co-WIN system?",
    replacedWord:
      "నా 2 వ మోతాదు నియామకం కో-విన్ సిస్టమ్ ద్వారా స్వయంచాలకంగా షెడ్యూల్ చేయబడుతుందా?"
  },
  {
    word: "No. You have to take an appointment for the 2nd dose vaccination. The Co-WIN system will help you book an appointment in a Vaccination Centre where the same vaccine is being administered as the vaccine type (COVAXIN or COVISHIELD) of the 1st dose.",
    replacedWord:
      "లేదు. మీరు 2 వ మోతాదు టీకా కోసం అపాయింట్‌మెంట్ తీసుకోవాలి. 1 వ మోతాదు యొక్క టీకా రకం (COVAXIN లేదా COVISHIELD) వలె అదే వ్యాక్సిన్ ఇవ్వబడుతున్న టీకా కేంద్రంలో అపాయింట్‌మెంట్ బుక్ చేసుకోవడానికి కో-విన్ వ్యవస్థ మీకు సహాయం చేస్తుంది."
  },
  {
    word: "Whom can I contact if I have some problems related to my online registration of appointment?",
    replacedWord:
      "నా ఆన్‌లైన్ నియామక రిజిస్ట్రేషన్‌కు సంబంధించి కొన్ని సమస్యలు ఉంటే నేను ఎవరిని సంప్రదించగలను?"
  },
  {
    word: "You can call on the national helpline â€˜1075â€™ for information and guidance on COVID-19 vaccination and Co-WIN software related queries.",
    replacedWord:
      "COVID-19 టీకా మరియు Co-WIN సాఫ్ట్‌వేర్ సంబంధిత ప్రశ్నలపై సమాచారం మరియు మార్గదర్శకత్వం కోసం మీరు జాతీయ హెల్ప్‌లైన్ â € 751075 € call కు కాల్ చేయవచ్చు."
  },
  {
    word: "Scheduling Appointment",
    replacedWord: "బి. అపాయింట్‌మెంట్ షెడ్యూల్ చేయడం"
  },
  {
    word: "Can I book an appointment for vaccination in the Co-WIN portal?",
    replacedWord: "Co-WIN పోర్టల్‌లో టీకా కోసం అపాయింట్‌మెంట్ బుక్ చేసుకోవచ్చా?"
  },
  {
    word: "Yes, you can book appointment for vaccination through Co-WIN portal after logging-in to the Co-WIN Portal through your registered mobile number. The system will show vaccination centres that allow vaccination as per the age of the citizen entered in the registration portal.",
    replacedWord:
      "అవును, మీరు మీ రిజిస్టర్డ్ మొబైల్ నంబర్ ద్వారా Co-WIN పోర్టల్‌కు లాగిన్ అయిన తర్వాత Co-WIN పోర్టల్ ద్వారా టీకా కోసం అపాయింట్‌మెంట్ బుక్ చేసుకోవచ్చు.  రిజిస్ట్రేషన్ పోర్టల్‌లో ప్రవేశించిన  వయస్సు ప్రకారం టీకాలు వేయడానికి అనుమతించే టీకా కేంద్రాలను ఈ వ్యవస్థ చూపిస్తుంది."
  },
  {
    word: "What are the options if one citizen is aged 45 or above and other is aged 18 or above?",
    replacedWord:
      "ఒక పౌరుడు 45 లేదా అంతకంటే ఎక్కువ వయస్సు ఉంటే మరియు మరొకరు 18 లేదా అంతకంటే ఎక్కువ వయస్సు ఉంటే ఎంపికలు ఏమిటి?"
  },
  {
    word: "If one citizen is aged 45 or above and other citizen is aged 18 to 44 years and both want to schedule a combined appointment, then only private paid vaccination centres or vaccination centres as per State’s policy will be made available. However, it may happen that some hospitals which are catering to people with 45 years or more may not allow the booking of appointments for people with lesser age. In that case you may make bookings one by one.",
    replacedWord:
      "ఒక పౌరుడు 45 లేదా అంతకంటే ఎక్కువ వయస్సు గలవాడు మరియు ఇతర పౌరుడు 18 నుండి 44 సంవత్సరాల వయస్సు గలవారు మరియు ఇద్దరూ కలిపి అపాయింట్‌మెంట్ షెడ్యూల్ చేయాలనుకుంటే, అప్పుడు రాష్ట్ర విధానం ప్రకారం ప్రైవేట్ చెల్లింపు టీకా కేంద్రాలు లేదా టీకా కేంద్రాలు మాత్రమే అందుబాటులో ఉంటాయి.  ఏదేమైనా, 45 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు ఉన్నవారికి క్యాటరింగ్ చేస్తున్న కొన్ని ఆసుపత్రులు తక్కువ వయస్సు ఉన్నవారికి నియామకాల బుకింగ్‌ను అనుమతించకపోవచ్చు.  అలాంటప్పుడు మీరు ఒక్కొక్కటిగా బుకింగ్ చేసుకోవచ్చు."
  },
  {
    word: "Can I check the vaccine being administered at each vaccination centre?",
    replacedWord: "ప్రతి టీకా కేంద్రంలో వ్యాక్సిన్‌ను నేను తనిఖీ చేయవచ్చా?"
  },
  {
    word: "Yes, while scheduling an appointment for vaccination, the system will show vaccination centre names along with the name of the vaccine that will be administered in case of private hospitals. Government hospitals may not show the name of the vaccine.",
    replacedWord:
      "అవును, టీకా కోసం అపాయింట్‌మెంట్ షెడ్యూల్ చేస్తున్నప్పుడు, ఈ వ్యవస్థ టీకా కేంద్రం పేర్లతో పాటు టీకా పేరును ప్రైవేట్ ఆస్పత్రుల విషయంలో నిర్వహించబడుతుంది.  ప్రభుత్వ ఆసుపత్రులు టీకా పేరు చూపించకపోవచ్చు."
  },
  {
    word: "Can I download appointment slip?",
    replacedWord: "నేను అపాయింట్‌మెంట్ స్లిప్‌ను డౌన్‌లోడ్ చేయవచ్చా?"
  },
  {
    word: "Yes, the appointment slip can be downloaded after the appointment has been scheduled.",
    replacedWord:
      "అవును, అపాయింట్‌మెంట్ షెడ్యూల్ అయిన తర్వాత అపాయింట్‌మెంట్ స్లిప్‌ను డౌన్‌లోడ్ చేసుకోవచ్చు."
  },
  {
    word: "How can I find the nearest vaccination centre?",
    replacedWord: "దగ్గరలో ఉన్న టీకా కేంద్రాన్ని నేను ఎలా కనుగొనగలను?"
  },
  {
    word: "Search by PIN",
    replacedWord: "పిన్ ద్వారా శోధించండి"
  },
  {
    word: "Search by District",
    replacedWord: "జిల్లా వారీగా శోధించండి"
  },
  {
    word: " You can search in Co-WIN portal (or Aarogya Setu) for the vaccination centre nearest to your location by either searching through PIN code or by choosing the State and the District. ",
    replacedWord:
      "పిన్ కోడ్ ద్వారా వెతకడం ద్వారా లేదా రాష్ట్రం మరియు జిల్లాను ఎంచుకోవడం ద్వారా మీ స్థానానికి దగ్గరగా ఉన్న టీకా కేంద్రం కోసం మీరు కో-విన్ పోర్టల్ (లేదా ఆరోగ్య సేతు) లో శోధించవచ్చు.  నియామక తేదీన నేను టీకా కోసం వెళ్ళలేకపోతే?"
  },
  {
    word: "Can I reschedule my appointment?",
    replacedWord: "నా  అపాయింట్‌మెంట్  నేను తిరిగి షెడ్యూల్ చేయవచ్చా?"
  },
  {
    word: "The appointment can be rescheduled at any time. In case you are not able to go for vaccination on the date of appointment, you can reschedule the appointment by clicking on â€œRescheduleâ€ tab.",
    replacedWord:
      'నా  అపాయింట్‌మెంట్ ఎప్పుడైనా రీ షెడ్యూల్ చేయవచ్చు.  ఒకవేళ మీరు నియామక తేదీన టీకా కోసం వెళ్ళలేకపోతే, మీరు "రీషెడ్యూల్" టాబ్ పై క్లిక్ చేయడం ద్వారా అపాయింట్‌మెంట్‌ను రీ షెడ్యూల్ చేయవచ్చు.'
  },
  {
    word: "Do I have an option for cancellation of appointment?",
    replacedWord: "అపాయింట్‌మెంట్  రద్దు చేయడానికి నాకు ఎంపిక ఉందా?"
  },
  {
    word: "What if I cannot go for vaccination on the date of appointment",
    replacedWord: "నియామక తేదీన నేను టీకా కోసం వెళ్ళలేకపోతే"
  },
  {
    word: "Yes, you can cancel an appointment already scheduled. You can also reschedule the appointment and choose another date or time slot of your convenience.",
    replacedWord:
      "అవును, మీరు ఇప్పటికే షెడ్యూల్ చేసిన అపాయింట్‌మెంట్‌ను రద్దు చేయవచ్చు.  మీరు అపాయింట్‌మెంట్‌ను తిరిగి షెడ్యూల్ చేయవచ్చు మరియు మీ సౌలభ్యం యొక్క మరొక తేదీ లేదా  స్లాట్‌ను ఎంచుకోవచ్చు."
  },
  {
    word: "Where will I receive confirmation of date and time of vaccination?",
    replacedWord:
      "టీకాలు వేసిన తేదీ మరియు సమయం యొక్క నిర్ధారణను నేను ఎక్కడ స్వీకరిస్తాను?"
  },
  {
    word: "Once an appointment is scheduled, you will receive the details of the vaccination centre, date and time slot chosen for appointment in an SMS sent to your registered mobile number. You can also download the appointment slip and print it or keep it on your smart phone.",
    replacedWord:
      "అపాయింట్‌మెంట్ షెడ్యూల్ చేసిన తర్వాత, మీ రిజిస్టర్డ్ మొబైల్ నంబర్‌కు పంపిన SMS లో టీకా కేంద్రం, తేదీ మరియు సమయ స్లాట్ వివరాలను మీరు అందుకుంటారు.  మీరు అపాయింట్‌మెంట్ స్లిప్‌ను డౌన్‌లోడ్ చేసి ప్రింట్ చేయవచ్చు లేదా మీ స్మార్ట్ ఫోన్‌లో ఉంచవచ్చు."
  },
  {
    word: "Can I get vaccination without appointment?",
    replacedWord: "అపాయింట్‌మెంట్ లేకుండా టీకా తీసుకోవచ్చా?"
  },
  {
    word: "Citizens aged 45 years and above can schedule appointments online or walk-in to vaccination centres.",
    replacedWord:
      "45 సంవత్సరాల మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న పౌరులు ఆన్‌లైన్‌లో నియామకాలను షెడ్యూల్ చేయవచ్చు లేదా టీకా కేంద్రాలకు నడవవచ్చు."
  },
  {
    word: "Citizens aged 18-44 years should mandatorily register themselves and schedule appointment online before vaccination.However, all citizens are recommended to register online and schedule vaccination in advance for a hassle-free vaccination experience.",
    replacedWord:
      "18-44 సంవత్సరాల వయస్సు గల పౌరులు తమను తాము తప్పనిసరిగా నమోదు చేసుకోవాలి మరియు టీకా చేయడానికి ముందు ఆన్‌లైన్‌లో నియామకాన్ని షెడ్యూల్ చేయాలి.  ఏదేమైనా, పౌరులందరూ ఆన్‌లైన్‌లో నమోదు చేసుకోవాలని మరియు ఇబ్బంది లేని టీకా అనుభవం కోసం టీకా ముందుగానే షెడ్యూల్ చేయాలని సిఫార్సు చేస్తున్నారు."
  },
  {
    word: "Can I check the price of the vaccine?",
    replacedWord: "నేను టీకా ధరను తనిఖీ చేయవచ్చా?"
  },
  {
    word: "Yes. The System will show the price of the vaccine below the name of the vaccination centre at the time of scheduling an appointment.",
    replacedWord:
      "అవును.  అపాయింట్‌మెంట్ షెడ్యూల్ చేసే సమయంలో టీకా ధరను సిస్టమ్ టీకా కేంద్రం పేరు క్రింద చూపిస్తుంది."
  },
  {
    word: "Can I choose the vaccine?",
    replacedWord: "నేను వ్యాక్సిన్‌ను ఎంచుకోవచ్చా?"
  },
  {
    word: "System will show the vaccine being administered in each vaccination centre at the time of scheduling an appointment. Citizen can choose the vaccination centre as per their choice of vaccine being administered However, the choice will not be available at the Government facilities .",
    replacedWord:
      "అపాయింట్‌మెంట్ షెడ్యూల్ చేసే సమయంలో ప్రతి టీకా కేంద్రంలో వ్యాక్సిన్ నిర్వహించబడుతున్నట్లు సిస్టమ్ చూపిస్తుంది.  టీకాలు వేయడం ద్వారా పౌరులు టీకా కేంద్రాన్ని ఎంచుకోవచ్చు, అయితే, ప్రభుత్వ సౌకర్యాల వద్ద ఎంపిక అందుబాటులో ఉండదు."
  },
  {
    word: "What precautions should I take at the time of 2nd dose vaccination?",
    replacedWord: "2 వ మోతాదు టీకాలు వేసే సమయంలో నేను ఏ జాగ్రత్తలు తీసుకోవాలి?"
  },
  {
    word: "The Vaccination Centres have been directed to ensure that if a citizen is being vaccinated with 2nd dose, they should confirm that the first dose vaccination was done with the same vaccine as is being offered at the time of second dose and that the first dose was administered more than 28 days ago. You should share the correct information about the vaccine type and the date of 1st dose vaccination with the vaccinator. You should carry your vaccine certificate issued after the first dose.",
    replacedWord:
      "ఒక పౌరుడికి 2 వ మోతాదుతో టీకాలు వేస్తున్నట్లయితే, రెండవ మోతాదు సమయంలో అందించబడుతున్న అదే వ్యాక్సిన్‌తో మొదటి మోతాదు వ్యాక్సిన్ చేయబడిందని మరియు మొదటి మోతాదు ఇవ్వబడిందని వారు నిర్ధారించాలని టీకా కేంద్రాలకు ఆదేశాలు ఇవ్వబడ్డాయి.  28 రోజుల క్రితం.  టీకా రకం మరియు 1 వ మోతాదు టీకా తేదీ గురించి సరైన సమాచారాన్ని మీరు టీకాతో పంచుకోవాలి.  మొదటి మోతాదు తర్వాత జారీ చేసిన మీ టీకా సర్టిఫికెట్‌ను మీరు తీసుకెళ్లాలి."
  },
  {
    word: "Can I get vaccinated with 2nd dose in a different State/District?",
    replacedWord: "నేను వేరే రాష్ట్రం / జిల్లాలో 2 వ మోతాదుతో టీకాలు వేయవచ్చా?"
  },
  {
    word: "Yes, you can get vaccinated in any State/District. The only restriction is that you will be able to get vaccinated only on those centres which are offering the same vaccine as was administered to you on your first dose.",
    replacedWord:
      "అవును, మీరు ఏ రాష్ట్రం / జిల్లాలోనైనా టీకాలు వేయవచ్చు.  మీ మొదటి మోతాదులో మీకు అందించిన అదే వ్యాక్సిన్‌ను అందిస్తున్న కేంద్రాల్లో మాత్రమే మీరు టీకాలు వేయగలుగుతారు."
  },
  {
    word: "Which documents should I carry with me for vaccination?",
    replacedWord: "టీకా కోసం నేను ఏ పత్రాలను నాతో తీసుకెళ్లాలి?"
  },
  {
    word: "You should carry your identity proof specified by you at the time of registration on the Co-WIN portal and a printout/screenshot of your appointment slip.",
    replacedWord:
      "కో-విన్ పోర్టల్‌లో రిజిస్ట్రేషన్ సమయంలో మీరు పేర్కొన్న మీ గుర్తింపు రుజువును మరియు మీ అపాయింట్‌మెంట్ స్లిప్ యొక్క ప్రింటౌట్ / స్క్రీన్ షాట్‌ను మీరు తీసుకెళ్లాలి."
  },
  {
    word: "I have registered myself on Co-Win portal. However, I am not able to make any booking as I do not see any vaccination facility near my location?",
    replacedWord:
      "నేను కో-విన్ పోర్టల్‌లో నన్ను నమోదు చేసుకున్నాను.  అయినప్పటికీ, నా స్థానానికి సమీపంలో ఎటువంటి టీకా సౌకర్యం కనిపించనందున నేను ఎటువంటి బుకింగ్ చేయలేను?"
  },
  {
    word: "What should I do?  Yes, it is possible that no facility near your place has published their vaccination program as yet. You may wait for some time till vaccination facilities near your place are onboarded on Co-Win platform, become active and start their services.",
    replacedWord:
      "నేనేం చేయాలి?  అవును, మీ స్థలానికి సమీపంలో ఉన్న ఏ సదుపాయం వారి టీకా కార్యక్రమాన్ని ఇంకా ప్రచురించలేదు.  మీ స్థలానికి సమీపంలో ఉన్న టీకా సౌకర్యాలు కో-విన్ ప్లాట్‌ఫామ్‌లో ఆన్‌బోర్డ్ అయ్యే వరకు మీరు కొంత సమయం వేచి ఉండవచ్చు, చురుకుగా ఉండి వారి సేవలను ప్రారంభించండి."
  },
  {
    word: "C. 2nd dose scheduling",
    replacedWord: "C. 2 వ మోతాదు షెడ్యూలింగ్"
  },
  {
    word: "Is it necessary to take 2nd dose of vaccination?",
    replacedWord: "టీకా 2 వ మోతాదు తీసుకోవడం అవసరమా?"
  },
  {
    word: "Yes. It is recommended that both doses of vaccine should be taken for realising the full benefit of vaccination. Both doses must be of the same vaccine type.",
    replacedWord:
      "అవును.  టీకా యొక్క పూర్తి ప్రయోజనాన్ని గ్రహించడానికి రెండు మోతాదుల వ్యాక్సిన్ తీసుకోవాలని సిఫార్సు చేయబడింది.  రెండు మోతాదులు ఒకే టీకా రకాన్ని కలిగి ఉండాలి."
  },
  {
    word: "It is recommended that the 2nd dose of COVAXIN should be administered in the interval of 4 to 6 weeks from the date of 1st dose administration. For COVISHIELD the recommended interval is 4 to 8 weeks while an interval of 6 to 8 weeks gives an enhanced protection. You may choose the date of 2nd dose vaccination as per your convenience.",
    replacedWord:
      "  1 వ మోతాదు పరిపాలన తేదీ నుండి 4 నుండి 6 వారాల వ్యవధిలో COVAXIN యొక్క 2 వ మోతాదును అందించాలని సిఫార్సు చేయబడింది. COVISHIELD కొరకు సిఫార్సు చేయబడిన విరామం 4 నుండి 8 వారాలు కాగా, 6 నుండి 8 వారాల విరామం మెరుగైన రక్షణను ఇస్తుంది. మీ సౌలభ్యం ప్రకారం మీరు 2 వ మోతాదు టీకా తేదీని ఎంచుకోవచ్చు."
  },
  {
    word: "Will my 2nd dose appointment be automatically scheduled by Co-WIN system?",
    replacedWord:
      "నా 2 వ మోతాదు నియామకం కో-విన్ సిస్టమ్ ద్వారా స్వయంచాలకంగా షెడ్యూల్ చేయబడుతుందా?"
  },
  {
    word: "No. You have to take an appointment for the 2nd dose vaccination. The Co-WIN system will help you book an appointment in a Vaccination Centre where the same vaccine is being administered as the vaccine type (COVAXIN or COVISHIELD) of the 1st dose.",
    replacedWord:
      "లేదు. మీరు 2 వ మోతాదు టీకా కోసం అపాయింట్‌మెంట్ తీసుకోవాలి.  1 వ మోతాదు యొక్క టీకా రకం (COVAXIN లేదా COVISHIELD) వలె అదే వ్యాక్సిన్ ఇవ్వబడుతున్న టీకా కేంద్రంలో అపాయింట్‌మెంట్ బుక్ చేసుకోవడానికి కో-విన్ వ్యవస్థ మీకు సహాయం చేస్తుంది."
  },
  {
    word: "Whom can I contact if I have some problems related to my online registration of appointment?",
    replacedWord:
      "నా ఆన్‌లైన్ నియామక రిజిస్ట్రేషన్‌కు సంబంధించి కొన్ని సమస్యలు ఉంటే నేను ఎవరిని సంప్రదించగలను?"
  },
  {
    word: "You can call on the national helpline ‘1075’ for information and guidance on COVID-19 vaccination and Co-WIN software related queries.",
    replacedWord:
      "COVID-19 టీకా మరియు కో-విన్ సాఫ్ట్‌వేర్ సంబంధిత ప్రశ్నలపై సమాచారం మరియు మార్గదర్శకత్వం కోసం మీరు జాతీయ హెల్ప్‌లైన్ '1075' కు కాల్ చేయవచ్చు."
  },
  {
    word: "Scheduling Appointment",
    replacedWord: "బి. నియామకాన్ని షెడ్యూల్ చేయడం"
  },
  {
    word: "Can I book an appointment for vaccination in the Co-WIN portal?",
    replacedWord:
      "కో-విన్ పోర్టల్‌లో టీకా కోసం అపాయింట్‌మెంట్ బుక్ చేసుకోవచ్చా?"
  },
  {
    word: "Yes, you can book appointment for vaccination through Co-WIN portal after logging-in to the Co-WIN Portal through your registered mobile number. The system will show vaccination centres that allow vaccination as per the age of the citizen entered in the registration portal.",
    replacedWord:
      "అవును, మీరు మీ రిజిస్టర్డ్ మొబైల్ నంబర్ ద్వారా కో-విన్ పోర్టల్‌కు లాగిన్ అయిన తర్వాత కో-విన్ పోర్టల్ ద్వారా టీకా కోసం అపాయింట్‌మెంట్ బుక్ చేసుకోవచ్చు.  రిజిస్ట్రేషన్ పోర్టల్‌లో ప్రవేశించిన పౌరుడి వయస్సు ప్రకారం టీకాలు వేయడానికి అనుమతించే టీకా కేంద్రాలను ఈ వ్యవస్థ చూపిస్తుంది."
  },
  {
    word: "What are the options if one citizen is aged 45 or above and other is aged 18 or above?",
    replacedWord:
      "ఒక పౌరుడు 45 లేదా అంతకంటే ఎక్కువ వయస్సు ఉంటే మరియు మరొకరు 18 లేదా అంతకంటే ఎక్కువ వయస్సు ఉంటే ఎంపికలు ఏమిటి?"
  },
  {
    word: "If one citizen is aged 45 or above and other citizen is aged 18 to 44 years and both want to schedule a combined appointment, then only private paid vaccination centres or vaccination centres as per Stateâ€™s policy will be made available. However, it may happen that some hospitals which are catering to people with 45 years or more may not allow the booking of appointments for people with lesser age. In that case you may make bookings one by one.",
    replacedWord:
      "ఒక పౌరుడు 45 లేదా అంతకంటే ఎక్కువ వయస్సు గలవాడు మరియు ఇతర పౌరుడు 18 నుండి 44 సంవత్సరాల వయస్సు గలవారు మరియు ఇద్దరూ కలిపి అపాయింట్‌మెంట్ షెడ్యూల్ చేయాలనుకుంటే, అప్పుడు రాష్ట్ర విధానం ప్రకారం ప్రైవేట్ చెల్లింపు టీకా కేంద్రాలు లేదా టీకా కేంద్రాలు మాత్రమే అందుబాటులో ఉంటాయి.  ఏదేమైనా, 45 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు ఉన్నవారికి క్యాటరింగ్ చేస్తున్న కొన్ని ఆసుపత్రులు తక్కువ వయస్సు ఉన్నవారికి నియామకాల బుకింగ్‌ను అనుమతించకపోవచ్చు.  అలాంటప్పుడు మీరు ఒక్కొక్కటిగా బుకింగ్ చేసుకోవచ్చు."
  },
  {
    word: "Can I check the vaccine being administered at each vaccination centre?",
    replacedWord: "ప్రతి టికా కేద్రం లో వ్యక్సిన్ ను నేను తనికి చ్రయవచ్హా ?"
  },
  {
    word: "Yes, while scheduling an appointment for vaccination, the system will show vaccination centre names along with the name of the vaccine that will be administered in case of private hospitals. Government hospitals may not show the name of the vaccine.",
    replacedWord:
      "అవును, టీకా కోసం అపాయింట్‌మెంట్ షెడ్యూల్ చేస్తున్నప్పుడు, ఈ వ్యవస్థ టీకా కేంద్రం పేర్లతో పాటు టీకా పేరును ప్రైవేట్ ఆస్పత్రుల విషయంలో నిర్వహించబడుతుంది. ప్రభుత్వ ఆసుపత్రులు టీకా పేరు చూపించకపోవచ్చు."
  },
  {
    word: "Can I download appointment slip?",
    replacedWord: "నేను అపాయింట్‌మెంట్ స్లిప్‌ను డౌన్‌లోడ్ చేయవచ్చా?"
  },
  {
    word: "Yes, the appointment slip can be downloaded after the appointment has been scheduled.",
    replacedWord:
      "అవును, అపాయింట్‌మెంట్ షెడ్యూల్ అయిన తర్వాత అపాయింట్‌మెంట్ స్లిప్‌ను డౌన్‌లోడ్ చేసుకోవచ్చు."
  },
  {
    word: "How can I find the nearest vaccination centre?",
    replacedWord: "సమీప టీకా కేంద్రాన్ని నేను ఎలా కనుగొనగలను?"
  },
  {
    word: "You can search in Co-WIN portal (or Aarogya Setu) for the vaccination centre nearest to your location by either searching through PIN code or by choosing the State and the District.",
    replacedWord:
      "పిన్ కోడ్ ద్వారా శోధించడం ద్వారా లేదా రాష్ట్రం మరియు జిల్లాను ఎంచుకోవడం ద్వారా మీ స్థానానికి దగ్గరగా ఉన్న టీకా కేంద్రం కోసం మీరు కో-విన్ పోర్టల్ (లేదా ఆరోగ్య సేతు) లో శోధించవచ్చు. నియామక తేదీన నేను టీకా కోసం వెళ్ళలేకపోతే?"
  },
  {
    word: "Can I reschedule my appointment?",
    replacedWord: "నా నియామకాన్ని నేను తిరిగి షెడ్యూల్ చేయవచ్చా?"
  },
  {
    word: "The appointment can be rescheduled at any time. In case you are not able to go for vaccination on the date of appointment, you can reschedule the appointment by clicking on “Reschedule” tab.",
    replacedWord:
      "నియామకాన్ని ఎప్పుడైనా రీ షెడ్యూల్ చేయవచ్చు. ఒకవేళ మీరు నియామక తేదీన టీకా కోసం వెళ్ళలేకపోతే, మీరు రీషెడ్యూల్ టాబ్ పై క్లిక్ చేయడం ద్వారా అపాయింట్‌మెంట్‌ను రీ షెడ్యూల్ చేయవచ్చు."
  },
  {
    word: "Do I have an option for cancellation of appointment?",
    replacedWord: "నియామకాన్ని రద్దు చేయడానికి నాకు ఎంపిక ఉందా?"
  },
  {
    word: "Yes, you can cancel an appointment already scheduled. You can also reschedule the appointment and choose another date or time slot of your convenience.",
    replacedWord:
      "అవును, మీరు ఇప్పటికే షెడ్యూల్ చేసిన అపాయింట్‌మెంట్‌ను రద్దు చేయవచ్చు. మీరు అపాయింట్‌మెంట్‌ను తిరిగి షెడ్యూల్ చేయవచ్చు మరియు మీ సౌలభ్యం యొక్క మరొక తేదీ లేదా సమయ స్లాట్‌ను ఎంచుకోవచ్చు."
  },
  {
    word: "Where will I receive confirmation of date and time of vaccination?",
    replacedWord:
      "టీకాలు వేసిన తేదీ మరియు సమయం యొక్క నిర్ధారణను నేను ఎక్కడ స్వీకరిస్తాను?"
  },
  {
    word: "Once an appointment is scheduled, you will receive the details of the vaccination centre, date and time slot chosen for appointment in an SMS sent to your registered mobile number. You can also download the appointment slip and print it or keep it on your smart phone.",
    replacedWord:
      "అపాయింట్‌మెంట్ షెడ్యూల్ చేసిన తర్వాత, మీ రిజిస్టర్డ్ మొబైల్ నంబర్‌కు పంపిన ఎస్ఎంఎస్‌లో టీకా కేంద్రం, తేదీ మరియు సమయ స్లాట్ వివరాలను మీరు అందుకుంటారు. మీరు అపాయింట్‌మెంట్ స్లిప్‌ను డౌన్‌లోడ్ చేసి ప్రింట్ చేయవచ్చు లేదా మీ స్మార్ట్ ఫోన్‌లో ఉంచవచ్చు."
  },
  {
    word: "Can I get vaccination without appointment?",
    replacedWord: "అపాయింట్‌మెంట్ లేకుండా టీకా తీసుకోవచ్చా?"
  },
  {
    word: "Citizens aged 45 years and above can schedule appointments online or walk-in to vaccination centres. Citizens aged 18-44 years should mandatorily register themselves and schedule appointment online before vaccination. However, all citizens are recommended to register online and schedule vaccination in advance for a hassle-free vaccination experience.",
    replacedWord:
      "45 సంవత్సరాల మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న పౌరులు ఆన్‌లైన్‌లో నియామకాలను షెడ్యూల్ చేయవచ్చు లేదా టీకా కేంద్రాలకు నడవవచ్చు. 18-44 సంవత్సరాల వయస్సు గల పౌరులు తమను తాము తప్పనిసరిగా నమోదు చేసుకోవాలి మరియు టీకా చేయడానికి ముందు ఆన్‌లైన్‌లో నియామకాన్ని షెడ్యూల్ చేయాలి. ఏదేమైనా, పౌరులందరూ ఆన్‌లైన్‌లో నమోదు చేసుకోవాలని మరియు ఇబ్బంది లేని టీకా అనుభవం కోసం టీకా ముందుగానే షెడ్యూల్ చేయాలని సిఫార్సు చేస్తున్నారు."
  },
  {
    word: "Citizens aged 18-44 years should mandatorily register themselves and schedule appointment online before vaccination",
    replacedWord:
      "18-44 సంవత్సరాల వయస్సు గల పౌరులు తమను తాము తప్పనిసరిగా నమోదు చేసుకోవాలి మరియు టీకా చేయడానికి ముందు ఆన్‌లైన్‌లో నియామకాన్ని షెడ్యూల్ చేయాలి"
  },
  {
    word: "However, all citizens are recommended to register online and schedule vaccination in advance for a hassle-free vaccination experience.",
    replacedWord:
      "ఏదేమైనా, పౌరులందరూ ఆన్‌లైన్‌లో నమోదు చేసుకోవాలని మరియు ఇబ్బంది లేని టీకా అనుభవం కోసం టీకా ముందుగానే షెడ్యూల్ చేయాలని సిఫార్సు చేస్తున్నారు."
  },
  {
    word: "Ministry of Health and Family Welfare",
    replacedWord: "ఆరోగ్య మరియు కుటుంబ సంక్షేమ మంత్రిత్వ శాఖ"
  },
  {
    word: "Register/ Sign In yourself",
    replacedWord: "నమోదు/మీరే సైన్ ఇన్ చేయండి"
  },
  {
    word: "Check your nearest vaccination center and slots availability",
    replacedWord: "మీకు దగ్గరలో వున్నా టీకా కేంద్రంలో స్లాట్లు శోధించండి"
  },
  {
    word: "Search",
    replacedWord: "శోధించండి"
  },
  {
    word: "View full report",
    replacedWord: "పూర్తి నివేదికను చూడండి"
  },
  {
    word: "How it Works",
    replacedWord:
      "అది ఎలా పని చేస్తుంది.మీరే నమోదు చేసుకోండి,మీ ఫోన్ నంబర్. / ఆధార్ నంబర్/మీ గుర్తింపు కార్డు. మీ సమీపంలో ఉన్న టీకా కేంద్రంని ఎంచుకోండి"
  },
  {
    word: "Choose Vaccine LocationSelect your nearby Vaccine Center for vaccination",
    replacedWord:
      "వ్యాక్సిన్ స్థానాన్ని ఎంచుకోండి టీకా కోసం మీ సమీప టీకా కేంద్రాన్ని ఎంచుకోండి"
  },
  {
    word: "Confirm your SlotBook your slot to Get Vaccine",
    replacedWord:
      "వ్యాక్సిన్ పొందడానికి మీ స్లాట్‌బుక్‌ను మీ స్లాట్‌గా నిర్ధారించండి"
  },
  {
    word: "Any Question? Please follow our Frequently asked questions (FAQ)",
    replacedWord:
      "ఏమైనా సందెహలు ఉన్నాయా? దయచేసి మా తరచుగా అడిగే ప్రశ్నలను (తరచుగా అడిగే ప్రశ్నలు) అనుసరించండి"
  },
  {
    word: "Know how to book your appointment Dos and Don'ts",
    replacedWord:
      "మీ అపాయింట్‌మెంట్ డాస్ మరియు చేయకూడని వాటిని ఎలా బుక్ చేయాలో తెలుసుకోండి"
  },
  {
    word: "Know how to book your appointment",
    replacedWord: "మీ అపాయింట్‌మెంట్ ఎలా బుక్ చేసుకోవాలో తెలుసుకోండి"
  },
  {
    word: "Dos and Don'ts",
    replacedWord: "చేయదగినవి మరియు చేయకూడనివి"
  },
  {
    word: "Our Partners",
    replacedWord: "మా భాగస్వాములు"
  },
  {
    word: "Co-WIN Support Desk- We're online  Send Transcriptions  End Chat",
    replacedWord:
      "కో-విన్ సపోర్ట్ డెస్క్- మేము ఆన్‌లైన్‌లో ట్రాన్స్క్రిప్షన్స్ ఎండ్ చాట్ పంపండి"
  },
  {
    word: "Co-WIN Support Desk- We're online",
    replacedWord: "కో-విన్ సపోర్ట్ డెస్క్- మేము ఆన్‌లైన్‌లో ఉన్నాము"
  },
  {
    word: "Send Transcriptions  End Chat",
    replacedWord: "ట్రాన్స్క్రిప్షన్స్ ఎండ్ చాట్ పంపండి"
  },
  {
    word: "Send Transcriptions  End Chat",
    replacedWord: "ట్రాన్స్క్రిప్షన్స్ ఎండ్ చాట్ పంపండి"
  },
  {
    word: "Start Chat",
    replacedWord: "చాట్ ప్రారంభించండి"
  },
  {
    word: "Monday, 1:27 PMWelcome to CoWin Helpdesk, if you need help simply reply to this message, we are online and ready to help.",
    replacedWord:
      "సోమవారం, 1:27 PM కోవిన్ హెల్ప్‌డెస్క్‌కు స్వాగతం, మీకు సహాయం అవసరమైతే ఈ సందేశానికి ప్రత్యుత్తరం ఇవ్వండి, మేము ఆన్‌లైన్‌లో ఉన్నాము మరియు సహాయం చేయడానికి సిద్ధంగా ఉన్నాము."
  },
  {
    word: "Monday, 1:27 PM",
    replacedWord: "సోమవారం, 1:27 అపరాహ్నం"
  },
  {
    word: "Welcome to CoWin Helpdesk, if you need help simply reply to this message, we are online and ready to help.",
    replacedWord: ""
  },
  {
    word: "This chat session has ended",
    replacedWord:
      "కోవిన్ హెల్ప్‌డెస్క్‌కు స్వాగతం, మీకు సహాయం అవసరమైతే ఈ సందేశానికి ప్రత్యుత్తరం ఇవ్వండి, మేము ఆన్‌లైన్‌లో ఉన్నాము మరియు సహాయం చేయడానికి సిద్ధంగా ఉన్నాము."
  },
  {
    word: "Tot",
    replacedWord: "మొత్తం"
  },
  {
    word: "Tot Vaccination Doses",
    replacedWord: "మొత్తం టీకా మోతాదు"
  },
  {
    word: "Dose-1 Vaccinations",
    replacedWord: null
  },
  {
    word: "Dose-2 Vaccinations",
    replacedWord: "మోతాదు -1 టీకాలు"
  },
  {
    word: "Tot Vaccinated - Male",
    replacedWord: "టోట్ టీకాలు - మగ"
  },
  {
    word: "Tot Vaccinated - Female",
    replacedWord: "టోట్ టీకాలు - ఆడ"
  },
  {
    word: "Male",
    replacedWord: "మగ"
  },
  {
    word: "Female",
    replacedWord: "ఆడ"
  },
  {
    word: "Register using your Mobile no. or Aadhaar no. or any other Identity docs.",
    replacedWord:
      "మీ మొబైల్ నంబర్ ఉపయోగించి నమోదు చేయండి. లేదా ఆధార్ నం. లేదా ఏదైనా ఇతర గుర్తింపు డాక్స్."
  },
  {
    word: "Select your nearby Vaccine Center for vaccination",
    replacedWord:
      "మీ మొబైల్ నంబర్ ఉపయోగించి నమోదు చేయండి. లేదా ఆధార్ నం. లేదా ఏదైనా ఇతర గుర్తింపు డాక్స్."
  },
  {
    word: "Book your slot to Get Vaccine",
    replacedWord: "టీకా కోసం మీ సమీప టీకా కేంద్రాన్ని ఎంచుకోండి"
  },
  {
    word: "Please follow our Frequently asked questions (FAQ)",
    replacedWord: "వ్యాక్సిన్ పొందడానికి మీ స్లాట్‌ను బుక్ చేసుకోండి"
  },
  {
    word: "How it Works",
    replacedWord:
      "దయచేసి మా తరచుగా అడిగే ప్రశ్నలను (తరచుగా అడిగే ప్రశ్నలు) అనుసరించండి"
  },
  {
    word: "Our Partners",
    replacedWord: "అది ఎలా పని చేస్తుంది"
  },
  {
    word: "Check your nearest vaccination center and slots availability",
    replacedWord: "మా భాగస్వాములు"
  },
  {
    word: "Register Yourself",
    replacedWord: "మీరే నమోదు చేసుకోండి"
  },
  {
    word: "Choose Vaccine Location",
    replacedWord: "టీకా ప్రదేశాన్ని ఎంచుకోండి"
  },
  {
    word: "Confirm your Slot",
    replacedWord: "మీ స్లాట్ ను నిర్ధారించండి"
  },
  {
    word: "Any Question?",
    replacedWord: "ఏమైనా ప్రశ్నలు ఉన్నాయా?"
  },
  {
    word: "This chat session has ended",
    replacedWord: "ఈ సంభాషణ కాలం ముగిసింది"
  },
  {
    word: "Ministry of Health and Family Welfare",
    replacedWord: "ఆరోగ్య మరియు కుటుంబ సంక్షేమ మంత్రిత్వ శాఖ"
  },
  {
    word: "FAQ",
    replacedWord: "తరుచుగా అడిగే ప్రశ్నలు"
  },
  {
    word: "Dashboard",
    replacedWord: "డాష్బోర్డ్"
  },
  {
    word: "Open APIs",
    replacedWord: "API లను తెరవండి"
  },
  {
    word: "Department Login",
    replacedWord: "విభాగం యొక్క లాగిన్"
  },
  {
    word: "Vaccinator",
    replacedWord: "టీకా"
  },
  {
    word: "Verify Certificate",
    replacedWord: "ప్రమాణపత్రాన్ని ధృవీకరించండి"
  },
  {
    word: "Register/ Sign In yourself",
    replacedWord: "మీరే నమోదు/సైన్ ఇన్ చేసుకోండి"
  },
  {
    word: "Register/ Sign In yourself",
    replacedWord: "మీరే నమోదు/సైన్ ఇన్ చేసుకోండి"
  },
  {
    word: "View full report Â»",
    replacedWord: "పూర్తి నివేదికను చూడండి »"
  },
  {
    word: "Frequently asked questions (FAQ)",
    replacedWord: "తరచుగా అడిగే ప్రశ్నలు (FAQ)"
  },
  {
    word: "Know how to book your appointment",
    replacedWord: "మీ అపాయింట్‌మెంట్ ఎలా బుక్ చేసుకోవాలో తెలుసుకోండి"
  },
  {
    word: "Dos and Don'ts",
    replacedWord: "చేయదగినవి మరియు చేయకూడనివి"
  },
  {
    word: "Send Transcriptions",
    replacedWord: "లిప్యంతరీకరణలను పంపండి"
  },
  {
    word: "End Chat",
    replacedWord: "ఎండ్ చాట్"
  },
  {
    word: "FAQ",
    replacedWord: "ఎఫ్ ఎ క్యూ"
  },
  {
    word: "Dashboard",
    replacedWord: "డాష్బోర్డ్"
  },
  {
    word: "Open APIs",
    replacedWord: "API లను తెరవండి"
  },
  {
    word: "Department Login",
    replacedWord: "విభాగం లాగిన్"
  },
  {
    word: "Vaccinator",
    replacedWord: "టీకా"
  },
  {
    word: "Verify Certificate",
    replacedWord: "సర్టిఫికెట్‌ను ధృవీకరించండి"
  },
  {
    word: "Register/ Sign In yourself",
    replacedWord: "మీరే నమోదు చేసుకోండి / సైన్ ఇన్ చేయండి"
  },
  {
    word: "FAQ Dashboard Open APIs  Department Login  Vaccinator  Verify Certificate",
    replacedWord:
      "తరచుగా అడిగే ప్రశ్నలు డాష్‌బోర్డ్ API లు విభాగం లాగిన్ వ్యాక్సినేటర్ ధృవీకరణ పత్రం"
  },
  {
    word: "Register/ Sign In yourself",
    replacedWord: "మీరే నమోదు చేసుకోండి / సైన్ ఇన్ చేయండి"
  },
  {
    word: " Please follow our ",
    replacedWord: "దయచేసి మా అనుసరించండి"
  },
  {
    word: "Frequently asked questions",
    replacedWord: "తరచుగా అడిగే ప్రశ్నలు"
  },
  {
    word: "Enter your PIN",
    replacedWord: "మీ పిన్ను నమోదు చేయండి"
  },
  {
    word: "You can contact on any of the following details",
    replacedWord: "మీరు ఈ క్రింది వివరాలలో దేనినైనా సంప్రదించవచ్చు"
  },
  {
    word: "Helpline Number",
    replacedWord: "హెల్ప్‌లైన్ సంఖ్య"
  },
  {
    word: " Technical Helpline Number",
    replacedWord: "సాంకేతిక హెల్ప్‌లైన్ సంఖ్య"
  },
  {
    word: "Helpline Email Id",
    replacedWord: "హెల్ప్‌లైన్ ఇమెయిల్ ఐడి"
  },
  {
    word: " You may also contact the Vaccination Centre where you took vaccination, for advice. ",
    replacedWord:
      "సలహా కోసం మీరు టీకా తీసుకున్న కేంద్రాన్ని కూడా సంప్రదించవచ్చు."
  },
  {
    word: "Toll free",
    replacedWord: "టోల్ ఫ్రీ"
  }
]

/**
 * This makes an array of everything elements inside the body tag
 */
document.body.onload = function () {
  const elementsInsideBody = [...document.body.getElementsByTagName("*")]
  window.onload = findAndReplace(elementsInsideBody)
}

/**
 * A function that loops through every single item
 * @param {*} elementsInsideBody
 */
//
function findAndReplace(elementsInsideBody) {
  elementsInsideBody.forEach((element) => {
    element.childNodes.forEach((child) => {
      if (child.nodeType === 3) {
        replaceText(child)
      }
    })
  })
}

/**
 * Regex Function to replace the node
 * @param {*} node
 */
function replaceText(node) {
  let value = node.nodeValue
  translations.map((obj) => {
    const regexVariable = new RegExp(obj.word, "g")
    value = value.replace(regexVariable, obj.replacedWord)
    node.nodeValue = value
  })
}
