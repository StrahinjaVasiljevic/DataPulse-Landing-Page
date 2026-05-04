'use strict';

/* ── i18n translations ─────────────────────────────────────── */
var TRANSLATIONS = {
  en: {
    'nav.how':   'How it works',
    'nav.why':   'Why not BI',
    'nav.who':   "Who it's for",
    'nav.pricing': 'Pricing',
    'cta.start': 'Start free',
    'cta.clone': 'Clone & run locally',
    'cta.contact': 'Contact us',
    'cta.h2':    'One endpoint, all your metrics',
    'cta.p':     'Start with the free plan. No credit card. Local first-run in minutes.',
    'hero.label':'Metrics infrastructure',
    'hero.h1':   'Stop asking engineers<br>for numbers',
    'hero.sub':  'Make metrics already be there',
    'hero.desc': 'POST one metric. Get a versioned, queryable KPI and a dashboard view. API-first — dashboards are consumers, not the product.',
    'hero.note': 'No credit card. Local first-run in minutes.',
    'hero.codefoot': 'This metric appears on the dashboard in ~2s',
    'real.label':'Live demo',
    'real.title':'See it happen',
    'real.sub':  'No backend. Simulated locally — same flow as production.',
    'demo.validated': 'validated',
    'demo.normalized':'normalized',
    'demo.stored':    'stored',
    'demo.btn':  'Send sample metric',
    'demo.waiting':   'waiting for metric…',
    'debug.label':'Debug snapshot',
    'debug.title':'What the response looks like',
    'debug.sub': 'Every ingested metric returns a structured response. No surprises.',
    'why.label': 'Philosophy',
    'why.title': 'Why DataPulse is not another BI tool',
    'why.p1':    "We don't query your databases. We don't connect to your warehouse. We receive metrics — you push them, we store them, versioned, immediately queryable.",
    'why.p2':    "We don't want you to drag widgets. The dashboard is a read-only consumer of a metric store. If your metric definition changes, you update it in one place and every consumer reflects that — not in 14 places across four dashboards someone built at 11pm.",
    'why.p3':    "We enforce metric definitions at ingestion time. Schema is validated on POST, not on query. Bad data is rejected before it pollutes your history — not discovered three months later during a board meeting.",
    'why.p4':    "Dashboards are consumers — not the product. The product is a versioned, auditable, workspace-scoped metric store with a stable API. The dashboard is one of several possible consumers; alerts and CSV exports are others.",
    'why.quote': '"If the definition of \'active user\' changes, it changes in the schema — not in a filter someone dragged onto a canvas."',
    'arch.label':'Architecture',
    'arch.title':'How data moves',
    'arch.sub':  'Linear. No side-channels. No warehouse dependency.',
    'arch.n1':   'Your service / script / CSV',
    'arch.n1s':  'anything that can POST',
    'arch.n2s':  'workspace-scoped keys · schema enforcement',
    'arch.n3s':  'type coercion · unit resolution · dedup',
    'arch.n4s':  'immutable history · v1 → v2 → v3',
    'arch.n5':   'Dashboard / Alert / CSV export',
    'arch.n5s':  'consumers — not the source of truth',
    'arch.b1':   'Metrics are pushed, not queried from a database.',
    'arch.b2':   'No Snowflake, no BigQuery, no dbt pipeline to maintain.',
    'arch.b3':   'Engineers define once. Everyone reads without a ticket.',
    'fit.label': 'Fit',
    'fit.title': 'Is DataPulse right for you?',
    'fit.no.title':  'This is NOT for you if…',
    'fit.no.1':  'You want drag-and-drop BI canvases',
    'fit.no.2':  'You already have a mature data warehouse + dbt pipeline',
    'fit.no.3':  'You need pixel-perfect executive reporting',
    'fit.no.4':  'Your team has a dedicated data analyst for every squad',
    'fit.yes.title': 'This IS for you if…',
    'fit.yes.1': 'Engineers keep being asked "what\'s the number?"',
    'fit.yes.2': 'Metrics live in code comments and Slack threads',
    'fit.yes.3': 'You want one source of truth without spinning up a warehouse',
    'fit.yes.4': "You'd rather push metrics than pull them from five places",
    'views.label':'Default views',
    'views.title':'Every metric gets these views by default',
    'views.sub': 'No configuration. These exist the moment a metric is first ingested.',
    'views.v1.title':'Current value',
    'views.v1.desc': 'The latest ingested value, with source and timestamp. Always reflects the last successful POST.',
    'views.v2.title':'Trend — 7 / 30 / 90 days',
    'views.v2.desc': 'Time-series view over configurable windows. Rolling aggregates are maintained at ingestion time — no query needed.',
    'views.v3.title':'Version history',
    'views.v3.desc': 'Every schema or definition change is versioned. v1 data and v2 data coexist without collision. Deprecate on your schedule.',
    'views.v4.title':'Threshold breaches',
    'views.v4.desc': 'A log of every time a metric crossed a defined threshold — value, direction, and ingestion timestamp recorded.',
    'views.v5.title':'Source provenance',
    'views.v5.desc': 'Every data point carries its source identifier and workspace key. You know exactly which service sent which value and when.',
    'cred.label':'Background',
    'cred.title':'Where DataPulse came from',
    'cred.c1.title':'Built as an internal tool first',
    'cred.c1.desc': 'DataPulse started as glue code between services that kept duplicating the same metric logic. It became a standalone product when the same pattern appeared in every project.',
    'cred.c2.title':'Used daily to track ~40 metrics across ~8 services',
    'cred.c2.desc': 'Before open-sourcing, it ran in production across multiple backend services tracking both business and infrastructure metrics. Numbers are approximate but real.',
    'cred.c3.title':'Designed to cut 10-15 "can you pull this number" requests per week',
    'cred.c3.desc': "That was the original brief. Engineers shouldn't be interrupt-driven data pipelines for their colleagues.",
    'cred.repo':  'View repository',
    'cred.adr':   'ADR docs',
    'cred.roadmap':'Roadmap',
    'pricing.label':'Pricing',
    'pricing.title':'Transparent pricing, no surprises',
    'pricing.sub':  'All plans include schema enforcement, versioned storage, and the full API.',
    'plan.free':  'Free',
    'plan.free.desc':'1 workspace, 5 metrics, 7-day history. Enough to validate the integration.',
    'plan.hist7': '7 days history',
    'plan.alerts':'Threshold alerts',
    'plan.badge': 'Most used',
    'plan.starter.desc':'3 workspaces, 50 metrics, 90-day history. For teams with real production traffic.',
    'plan.hist90':'90 days history',
    'plan.webhook':'Threshold alerts + webhook',
    'plan.digest':'Email digest',
    'plan.growth.desc':'Unlimited workspaces and metrics, 2-year history. Slack, DPA, priority support.',
    'plan.unl.ws':'Unlimited workspaces',
    'plan.unl.m': 'Unlimited metrics',
    'plan.hist2y':'2 years history',
    'plan.slack': 'Slack integration',
    'faq.title':  'Frequently asked questions',
    'faq.q1': 'Do I need a data warehouse?',
    'faq.a1': 'No. DataPulse receives metrics via POST — it does not connect to your database or warehouse. There is nothing to provision on your data infrastructure side.',
    'faq.q2': 'How long does integration take?',
    'faq.a2': 'Under 5 minutes for the first metric. One POST request, one API key, one endpoint. The key is workspace-scoped, so you can rotate it without touching other services.',
    'faq.q3': "What happens when a metric's definition changes?",
    'faq.a3': 'You update the schema and DataPulse increments the version (v1 to v2). Historical data under v1 is preserved and queryable. The two versions do not collide. You can deprecate v1 on a schedule.',
    'faq.q4': 'Where is data stored?',
    'faq.a4': 'EU servers only. GDPR-compliant by design. A Data Processing Agreement is available for all paid plans. No data is processed outside the EU.',
    'faq.q5': "What if I exceed my plan's metric limit?",
    'faq.a5': 'Data is never dropped. You receive a notification and 14 days to upgrade. No automatic charges, no silent data loss.',
    'faq.q6': 'Can I run it locally?',
    'faq.a6': 'Yes. Clone the repository and follow the README. The local stack runs without external dependencies. Useful for development and for understanding the ingestion pipeline before committing to the hosted version.',
    'footer.eu': 'EU servers',
    'form.success': 'Received. We will be in touch.',
    'form.error':   'Something went wrong. Email us: hello@datapulse.io',
    'form.invalid': 'Please enter a valid email address.',
    'form.sending': 'Sending…'
  },

  de: {
    'nav.how':   'So funktioniert es',
    'nav.why':   'Kein BI-Tool',
    'nav.who':   'Für wen?',
    'nav.pricing': 'Preise',
    'cta.start': 'Kostenlos starten',
    'cta.clone': 'Klonen & lokal starten',
    'cta.contact': 'Kontakt',
    'cta.h2':    'Ein Endpunkt, alle deine Metriken',
    'cta.p':     'Starte mit dem Free-Plan. Keine Kreditkarte. Lokaler Erststart in Minuten.',
    'hero.label':'Metriken-Infrastruktur',
    'hero.h1':   'Hör auf, Entwickler<br>nach Zahlen zu fragen',
    'hero.sub':  'Lass Metriken einfach da sein',
    'hero.desc': 'Eine Metrik per POST senden. Eine versionierte, abfragbare KPI und eine Dashboard-Ansicht erhalten. API-first — Dashboards sind Konsumenten, nicht das Produkt.',
    'hero.note': 'Keine Kreditkarte. Lokaler Erststart in Minuten.',
    'hero.codefoot': 'Diese Metrik erscheint in ~2s im Dashboard',
    'real.label':'Live-Demo',
    'real.title':'Sieh es in Aktion',
    'real.sub':  'Kein Backend. Lokal simuliert — gleicher Ablauf wie in Produktion.',
    'demo.validated': 'validiert',
    'demo.normalized':'normalisiert',
    'demo.stored':    'gespeichert',
    'demo.btn':  'Beispiel-Metrik senden',
    'demo.waiting':   'Warte auf Metrik…',
    'debug.label':'Debug-Snapshot',
    'debug.title':'So sieht die Antwort aus',
    'debug.sub': 'Jede aufgenommene Metrik gibt eine strukturierte Antwort zurück. Keine Überraschungen.',
    'why.label': 'Philosophie',
    'why.title': 'Warum DataPulse kein BI-Tool ist',
    'why.p1':    "Wir fragen keine Datenbanken ab. Wir verbinden uns nicht mit deinem Warehouse. Wir empfangen Metriken — du sendest sie, wir speichern sie, versioniert, sofort abfragbar.",
    'why.p2':    "Wir wollen nicht, dass du Widgets herumziehst. Das Dashboard ist ein schreibgeschützter Konsument eines Metrik-Stores. Wenn sich eine Metrik-Definition ändert, änderst du sie an einem Ort — nicht an 14 Stellen in vier Dashboards, die jemand um 23 Uhr gebaut hat.",
    'why.p3':    "Wir erzwingen Metrik-Definitionen zur Aufnahmezeit. Das Schema wird beim POST validiert, nicht beim Abfragen. Fehlerhafte Daten werden abgelehnt, bevor sie deine Historie verschmutzen — nicht erst drei Monate später im Board-Meeting.",
    'why.p4':    "Dashboards sind Konsumenten — nicht das Produkt. Das Produkt ist ein versionierter, auditierbarer, workspace-bezogener Metrik-Store mit einer stabilen API. Das Dashboard ist einer von mehreren möglichen Konsumenten; Alerts und CSV-Exporte sind weitere.",
    'why.quote': '"Wenn sich die Definition von \'aktivem Nutzer\' ändert, ändert sie sich im Schema — nicht in einem Filter, den jemand auf eine Canvas gezogen hat."',
    'arch.label':'Architektur',
    'arch.title':'Wie Daten fließen',
    'arch.sub':  'Linear. Keine Seitenkanäle. Keine Warehouse-Abhängigkeit.',
    'arch.n1':   'Dein Service / Skript / CSV',
    'arch.n1s':  'alles, das POST kann',
    'arch.n2s':  'workspace-bezogene Schlüssel · Schema-Validierung',
    'arch.n3s':  'Typkonvertierung · Einheitenauflösung · Dedup',
    'arch.n4s':  'unveränderliche Historie · v1 → v2 → v3',
    'arch.n5':   'Dashboard / Alert / CSV-Export',
    'arch.n5s':  'Konsumenten — nicht die Quelle der Wahrheit',
    'arch.b1':   'Metriken werden gesendet, nicht aus einer Datenbank abgefragt.',
    'arch.b2':   'Kein Snowflake, kein BigQuery, keine dbt-Pipeline zu pflegen.',
    'arch.b3':   'Entwickler definieren einmal. Alle lesen ohne Ticket.',
    'fit.label': 'Passung',
    'fit.title': 'Ist DataPulse das Richtige für dich?',
    'fit.no.title':  'Nicht für dich, wenn…',
    'fit.no.1':  'Du Drag-and-Drop-BI-Canvases willst',
    'fit.no.2':  'Du bereits ein reifes Data Warehouse + dbt-Pipeline hast',
    'fit.no.3':  'Du pixel-perfekte Executive-Reports brauchst',
    'fit.no.4':  'Dein Team einen dedizierten Datenanalysten pro Squad hat',
    'fit.yes.title': 'Für dich, wenn…',
    'fit.yes.1': 'Entwickler ständig gefragt werden: "Was ist die Zahl?"',
    'fit.yes.2': 'Metriken in Code-Kommentaren und Slack-Threads leben',
    'fit.yes.3': 'Du eine einzige Wahrheitsquelle willst, ohne ein Warehouse aufzusetzen',
    'fit.yes.4': 'Du Metriken lieber sendest als sie aus fünf Quellen zu ziehen',
    'views.label':'Standard-Ansichten',
    'views.title':'Jede Metrik bekommt diese Ansichten standardmäßig',
    'views.sub': 'Keine Konfiguration. Diese existieren ab dem ersten Aufnahme-Moment.',
    'views.v1.title':'Aktueller Wert',
    'views.v1.desc': 'Der zuletzt aufgenommene Wert, mit Quelle und Zeitstempel. Entspricht immer dem letzten erfolgreichen POST.',
    'views.v2.title':'Trend — 7 / 30 / 90 Tage',
    'views.v2.desc': 'Zeitreihendarstellung über konfigurierbare Fenster. Rollende Aggregate werden zur Aufnahmezeit berechnet — keine Abfrage nötig.',
    'views.v3.title':'Versionshistorie',
    'views.v3.desc': 'Jede Schema- oder Definitionsänderung wird versioniert. v1- und v2-Daten koexistieren ohne Kollision. Deprecation nach eigenem Zeitplan.',
    'views.v4.title':'Schwellwert-Überschreitungen',
    'views.v4.desc': 'Ein Log jedes Mal, wenn eine Metrik einen definierten Schwellwert überschreitet — Wert, Richtung und Aufnahme-Zeitstempel werden erfasst.',
    'views.v5.title':'Quellenherkunft',
    'views.v5.desc': 'Jeder Datenpunkt trägt seine Quellenkennung und den Workspace-Schlüssel. Du weißt genau, welcher Service welchen Wert wann gesendet hat.',
    'cred.label':'Hintergrund',
    'cred.title':'Wie DataPulse entstanden ist',
    'cred.c1.title':'Zuerst als internes Tool gebaut',
    'cred.c1.desc': 'DataPulse begann als Verbindungscode zwischen Services, die immer wieder dieselbe Metrik-Logik dupliziert haben. Es wurde zum eigenständigen Produkt, als dasselbe Muster in jedem Projekt auftauchte.',
    'cred.c2.title':'Täglich genutzt für ~40 Metriken über ~8 Services',
    'cred.c2.desc': 'Vor der Open-Source-Veröffentlichung lief es in Produktion über mehrere Backend-Services und erfasste sowohl Business- als auch Infrastruktur-Metriken. Zahlen sind ungefähr, aber real.',
    'cred.c3.title':'Entwickelt, um 10-15 "Kannst du diese Zahl rausziehen"-Anfragen pro Woche zu eliminieren',
    'cred.c3.desc': 'Das war die ursprüngliche Anforderung. Entwickler sollten keine interrupt-getriebenen Datenpipelines für ihre Kollegen sein.',
    'cred.repo':  'Repository ansehen',
    'cred.adr':   'ADR-Dokumentation',
    'cred.roadmap':'Roadmap',
    'pricing.label':'Preise',
    'pricing.title':'Transparente Preise, keine Überraschungen',
    'pricing.sub':  'Alle Pläne beinhalten Schema-Validierung, versionierten Speicher und die vollständige API.',
    'plan.free':  'Kostenlos',
    'plan.free.desc':'1 Workspace, 5 Metriken, 7 Tage Historie. Genug, um die Integration zu validieren.',
    'plan.hist7': '7 Tage Historie',
    'plan.alerts':'Schwellwert-Alerts',
    'plan.badge': 'Beliebteste',
    'plan.starter.desc':'3 Workspaces, 50 Metriken, 90 Tage Historie. Für Teams mit echtem Produktions-Traffic.',
    'plan.hist90':'90 Tage Historie',
    'plan.webhook':'Schwellwert-Alerts + Webhook',
    'plan.digest':'E-Mail-Digest',
    'plan.growth.desc':'Unbegrenzte Workspaces und Metriken, 2 Jahre Historie. Slack, DPA, Priority-Support.',
    'plan.unl.ws':'Unbegrenzte Workspaces',
    'plan.unl.m': 'Unbegrenzte Metriken',
    'plan.hist2y':'2 Jahre Historie',
    'plan.slack': 'Slack-Integration',
    'faq.title':  'Häufig gestellte Fragen',
    'faq.q1': 'Brauche ich ein Data Warehouse?',
    'faq.a1': 'Nein. DataPulse empfängt Metriken via POST — es verbindet sich nicht mit deiner Datenbank oder deinem Warehouse. Auf deiner Daten-Infrastruktur-Seite muss nichts bereitgestellt werden.',
    'faq.q2': 'Wie lange dauert die Integration?',
    'faq.a2': 'Unter 5 Minuten für die erste Metrik. Ein POST-Request, ein API-Schlüssel, ein Endpunkt. Der Schlüssel ist workspace-bezogen, sodass du ihn rotieren kannst, ohne andere Services anzufassen.',
    'faq.q3': 'Was passiert, wenn sich die Definition einer Metrik ändert?',
    'faq.a3': 'Du aktualisierst das Schema und DataPulse erhöht die Version (v1 auf v2). Historische Daten unter v1 bleiben erhalten und abfragbar. Die beiden Versionen kollidieren nicht. Du kannst v1 nach eigenem Zeitplan deprecaten.',
    'faq.q4': 'Wo werden die Daten gespeichert?',
    'faq.a4': 'Nur auf EU-Servern. DSGVO-konform by Design. Ein Auftragsverarbeitungsvertrag ist für alle bezahlten Pläne verfügbar. Keine Datenverarbeitung außerhalb der EU.',
    'faq.q5': 'Was passiert, wenn ich das Metrik-Limit meines Plans überschreite?',
    'faq.a5': 'Daten werden nie verworfen. Du erhältst eine Benachrichtigung und hast 14 Tage zum Upgrade. Keine automatischen Abbuchungen, kein stiller Datenverlust.',
    'faq.q6': 'Kann ich es lokal ausführen?',
    'faq.a6': 'Ja. Klone das Repository und folge der README. Der lokale Stack läuft ohne externe Abhängigkeiten. Nützlich für die Entwicklung und um die Aufnahme-Pipeline zu verstehen, bevor man zur gehosteten Version wechselt.',
    'footer.eu': 'EU-Server',
    'form.success': 'Erhalten. Wir melden uns.',
    'form.error':   'Etwas ist schiefgelaufen. Schreib uns: hello@datapulse.io',
    'form.invalid': 'Bitte gib eine gültige E-Mail-Adresse ein.',
    'form.sending': 'Senden…'
  },

  sr: {
    'nav.how':   'Kako radi',
    'nav.why':   'Zašto nije BI',
    'nav.who':   'Za koga je',
    'nav.pricing': 'Cene',
    'cta.start': 'Počni besplatno',
    'cta.clone': 'Kloniraj i pokreni lokalno',
    'cta.contact': 'Kontaktiraj nas',
    'cta.h2':    'Jedan endpoint, sve tvoje metrike',
    'cta.p':     'Počni sa besplatnim planom. Bez kreditne kartice. Lokalno pokretanje za nekoliko minuta.',
    'hero.label':'Infrastruktura za metrike',
    'hero.h1':   'Prestani da pitaš inženjere<br>za brojeve',
    'hero.sub':  'Neka metrike jednostavno budu tamo',
    'hero.desc': 'Pošalji jednu metriku via POST. Dobiješ verzionisani, upitljivi KPI i prikaz na dashboardu. API-first — dashboardi su konzumenti, ne proizvod.',
    'hero.note': 'Bez kreditne kartice. Lokalno pokretanje za nekoliko minuta.',
    'hero.codefoot': 'Ova metrika se pojavljuje na dashboardu za ~2s',
    'real.label':'Uživo demo',
    'real.title':'Vidi kako funkcioniše',
    'real.sub':  'Bez backenda. Simulirano lokalno — isti tok kao u produkciji.',
    'demo.validated': 'validovano',
    'demo.normalized':'normalizovano',
    'demo.stored':    'sačuvano',
    'demo.btn':  'Pošalji primer metrike',
    'demo.waiting':   'čekanje na metriku…',
    'debug.label':'Debug snimak',
    'debug.title':'Kako izgleda odgovor',
    'debug.sub': 'Svaka primljena metrika vraća strukturisani odgovor. Bez iznenađenja.',
    'why.label': 'Filozofija',
    'why.title': 'Zašto DataPulse nije još jedan BI alat',
    'why.p1':    "Ne upitujemo tvoje baze podataka. Ne spajamo se na tvoj warehouse. Primamo metrike — ti ih šalješ, mi ih čuvamo, verzionisane, odmah upitljive.",
    'why.p2':    "Ne želimo da prevlačiš widgete. Dashboard je samo za čitanje, konzument metrik-stora. Ako se definicija metrike promeni, menjaš je na jednom mestu i svaki konzument to odmah odražava — ne na 14 mesta u četiri dashboarda koje je neko napravio u 23h.",
    'why.p3':    "Definicije metrika primenjujemo na samom unosu. Šema se validira pri POST-u, ne pri upitu. Loši podaci se odbacuju pre nego što zagade historiju — ne otkrivaju tri meseca kasnije na board meetingu.",
    'why.p4':    "Dashboardi su konzumenti — ne proizvod. Proizvod je verzionisani, revizibilni, workspace-ograničeni metrik-stor sa stabilnim API-jem. Dashboard je jedan od nekoliko mogućih konzumenata; alarmi i CSV exporti su drugi.",
    'why.quote': '"Ako se definicija \'aktivnog korisnika\' promeni, menja se u šemi — ne u filteru koji je neko prevukao na canvas."',
    'arch.label':'Arhitektura',
    'arch.title':'Kako se podaci kreću',
    'arch.sub':  'Linearno. Bez bočnih kanala. Bez zavisnosti od warehouse-a.',
    'arch.n1':   'Tvoj servis / skripta / CSV',
    'arch.n1s':  'sve što može da pošalje POST',
    'arch.n2s':  'workspace-ograničeni ključevi · validacija šeme',
    'arch.n3s':  'konverzija tipova · razrešavanje jedinica · dedup',
    'arch.n4s':  'nepromenljiva istorija · v1 → v2 → v3',
    'arch.n5':   'Dashboard / Alarm / CSV export',
    'arch.n5s':  'konzumenti — ne izvor istine',
    'arch.b1':   'Metrike se šalju, ne upituju iz baze.',
    'arch.b2':   'Bez Snowflake-a, bez BigQuery-ja, bez dbt pipeline-a za održavanje.',
    'arch.b3':   'Inženjeri definišu jednom. Svi čitaju bez tiketa.',
    'fit.label': 'Podudaranje',
    'fit.title': 'Da li je DataPulse pravo rešenje za tebe?',
    'fit.no.title':  'Ovo NIJE za tebe ako…',
    'fit.no.1':  'Želiš drag-and-drop BI canvas',
    'fit.no.2':  'Već imaš zreo data warehouse + dbt pipeline',
    'fit.no.3':  'Trebaš pixel-savršene izveštaje za menadžment',
    'fit.no.4':  'Tvoj tim ima dedicated data analitičara za svaki squad',
    'fit.yes.title': 'Ovo JE za tebe ako…',
    'fit.yes.1': 'Inženjeri stalno dobijaju pitanje: "Koji je broj?"',
    'fit.yes.2': 'Metrike žive u komentarima u kodu i Slack thread-ovima',
    'fit.yes.3': 'Hoćeš jedan izvor istine bez postavljanja warehouse-a',
    'fit.yes.4': 'Radije šalješ metrike nego što ih vuče iz pet mesta',
    'views.label':'Podrazumevane prikaze',
    'views.title':'Svaka metrika dobija ove prikaze podrazumevano',
    'views.sub': 'Bez konfiguracije. Postoje od momenta prvog unosa metrike.',
    'views.v1.title':'Trenutna vrednost',
    'views.v1.desc': 'Poslednja unesena vrednost, sa izvorom i vremenskom oznakom. Uvek odražava poslednji uspešan POST.',
    'views.v2.title':'Trend — 7 / 30 / 90 dana',
    'views.v2.desc': 'Prikaz vremenskih serija kroz podešljive prozore. Klizni agregati se računaju pri unosu — bez upita.',
    'views.v3.title':'Istorija verzija',
    'views.v3.desc': 'Svaka promena šeme ili definicije je verzionisana. v1 i v2 podaci koegzistiraju bez kolizije. Deprecacija po sopstvenom rasporedu.',
    'views.v4.title':'Prekoračenja praga',
    'views.v4.desc': 'Log svaki put kada metrika pređe definisani prag — vrednost, smer i vremenska oznaka unosa su zabeleženi.',
    'views.v5.title':'Poreklo izvora',
    'views.v5.desc': 'Svaki podatak nosi identifikator izvora i workspace ključ. Znaš tačno koji servis je poslao koju vrednost i kada.',
    'cred.label':'Poreklo',
    'cred.title':'Odakle je DataPulse nastao',
    'cred.c1.title':'Najpre izgrađen kao interni alat',
    'cred.c1.desc': 'DataPulse je počeo kao vezni kod između servisa koji su stalno duplirali istu logiku za metrike. Postao je samostalan proizvod kad se isti obrazac pojavio u svakom projektu.',
    'cred.c2.title':'Koristi se svakodnevno za praćenje ~40 metrika na ~8 servisa',
    'cred.c2.desc': 'Pre otvaranja koda, radio je u produkciji na više backend servisa, prateći i poslovne i infrastrukturne metrike. Brojevi su okvirni, ali realni.',
    'cred.c3.title':'Dizajniran da eliminiše 10-15 zahteva "možeš li izvući ovaj broj?" nedeljno',
    'cred.c3.desc': 'To je bio originalni zahtev. Inženjeri ne bi trebalo da budu interrupt-driven data pipeline za svoje kolege.',
    'cred.repo':  'Pogledaj repozitorijum',
    'cred.adr':   'ADR dokumentacija',
    'cred.roadmap':'Roadmap',
    'pricing.label':'Cene',
    'pricing.title':'Transparentne cene, bez iznenađenja',
    'pricing.sub':  'Svi planovi uključuju validaciju šeme, verzionisano čuvanje i kompletan API.',
    'plan.free':  'Besplatno',
    'plan.free.desc':'1 workspace, 5 metrika, 7 dana istorije. Dovoljno za validaciju integracije.',
    'plan.hist7': '7 dana istorije',
    'plan.alerts':'Alarmi na prag',
    'plan.badge': 'Najpopularnije',
    'plan.starter.desc':'3 workspace-a, 50 metrika, 90 dana istorije. Za timove sa stvarnim produkcijskim prometom.',
    'plan.hist90':'90 dana istorije',
    'plan.webhook':'Alarmi na prag + webhook',
    'plan.digest':'Email digest',
    'plan.growth.desc':'Neograničeni workspace-i i metrike, 2 godine istorije. Slack, DPA, prioritetna podrška.',
    'plan.unl.ws':'Neograničeni workspace-i',
    'plan.unl.m': 'Neograničene metrike',
    'plan.hist2y':'2 godine istorije',
    'plan.slack': 'Slack integracija',
    'faq.title':  'Česta pitanja',
    'faq.q1': 'Da li mi je potreban data warehouse?',
    'faq.a1': 'Ne. DataPulse prima metrike via POST — ne spaja se na tvoju bazu ili warehouse. Na strani tvoje data infrastrukture nema ništa za podešavanje.',
    'faq.q2': 'Koliko traje integracija?',
    'faq.a2': 'Manje od 5 minuta za prvu metriku. Jedan POST zahtev, jedan API ključ, jedan endpoint. Ključ je workspace-ograničen, tako da ga možeš rotirati bez diranja ostalih servisa.',
    'faq.q3': 'Šta se dešava kada se definicija metrike promeni?',
    'faq.a3': 'Ažuriraš šemu i DataPulse povećava verziju (v1 na v2). Istorijski podaci pod v1 ostaju sačuvani i upitljivi. Dve verzije ne kolidiraju. Možeš deprecovati v1 po sopstvenom rasporedu.',
    'faq.q4': 'Gde se čuvaju podaci?',
    'faq.a4': 'Isključivo na EU serverima. GDPR-usklađen po dizajnu. Ugovor o obradi podataka dostupan je za sve plaćene planove. Nikakva obrada podataka izvan EU.',
    'faq.q5': 'Šta ako prekoračim limit metrika mog plana?',
    'faq.a5': 'Podaci se nikada ne odbacuju. Dobijaš obaveštenje i imaš 14 dana za nadogradnju. Bez automatskog naplaćivanja, bez tihog gubitka podataka.',
    'faq.q6': 'Mogu li ga pokrenuti lokalno?',
    'faq.a6': 'Da. Kloniraj repozitorijum i prati README. Lokalni stack radi bez eksternih zavisnosti. Korisno za razvoj i razumevanje pipeline-a za unos pre prelaska na hostovanu verziju.',
    'footer.eu': 'EU serveri',
    'form.success': 'Primljeno. Javićemo ti se.',
    'form.error':   'Nešto je pošlo naopako. Piši nam: hello@datapulse.io',
    'form.invalid': 'Upiši ispravnu email adresu.',
    'form.sending': 'Šaljem…'
  }
};

/* ── i18n engine ───────────────────────────────────────────── */
var currentLang = 'en';

function t(key) {
  var dict = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
  return dict[key] || TRANSLATIONS['en'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = t(key);
    if (el.tagName === 'INPUT') {
      el.placeholder = val;
    } else if (val.indexOf('<br>') !== -1) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  document.documentElement.lang = currentLang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('dp-lang', lang);

  // Update current label
  var cur = document.getElementById('lang-current');
  if (cur) cur.textContent = lang.toUpperCase();

  // Update aria-selected
  document.querySelectorAll('#lang-menu li').forEach(function(li) {
    li.setAttribute('aria-selected', li.getAttribute('data-lang') === lang ? 'true' : 'false');
  });

  // Close menu
  closeLangMenu();

  // Apply
  applyTranslations();

  // Reset demo status text
  var metaEl = document.getElementById('demo-meta');
  if (metaEl && metaEl.textContent.indexOf('waiting') !== -1 || metaEl && metaEl.textContent.indexOf('čeka') !== -1 || metaEl && metaEl.textContent.indexOf('Warte') !== -1) {
    metaEl.textContent = t('demo.waiting');
  }
}

/* ── Theme ─────────────────────────────────────────────────── */
function toggleTheme() {
  var cur  = document.documentElement.getAttribute('data-theme');
  var next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('dp-theme', next);
  var btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = next === 'dark' ? '🌙' : '☀️';
}

/* ── Lang menu ─────────────────────────────────────────────── */
function toggleLangMenu() {
  var menu    = document.getElementById('lang-menu');
  var trigger = document.getElementById('lang-trigger');
  var isOpen  = menu.classList.contains('open');
  if (isOpen) {
    closeLangMenu();
  } else {
    menu.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
  }
}

function closeLangMenu() {
  var menu    = document.getElementById('lang-menu');
  var trigger = document.getElementById('lang-trigger');
  if (menu)    menu.classList.remove('open');
  if (trigger) trigger.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', function(e) {
  var dd = document.getElementById('lang-dropdown');
  if (dd && !dd.contains(e.target)) closeLangMenu();
});

/* ── FAQ accordion ─────────────────────────────────────────── */
function toggleFaq(btn) {
  var expanded = btn.getAttribute('aria-expanded') === 'true';
  var panelId  = btn.getAttribute('aria-controls');
  var panel    = document.getElementById(panelId);

  document.querySelectorAll('.faq-q').forEach(function(b) {
    b.setAttribute('aria-expanded', 'false');
    var pid = b.getAttribute('aria-controls');
    var p   = document.getElementById(pid);
    if (p) p.hidden = true;
  });

  if (!expanded) {
    btn.setAttribute('aria-expanded', 'true');
    if (panel) panel.hidden = false;
  }
}

/* ── Live demo ─────────────────────────────────────────────── */
var demoRunning = false;

function runDemo() {
  if (demoRunning) return;
  demoRunning = true;

  var btn       = document.getElementById('demo-btn');
  var statusEl  = document.getElementById('demo-status');
  var valueEl   = document.getElementById('demo-value');
  var metaEl    = document.getElementById('demo-meta');
  var barEl     = document.getElementById('demo-bar');
  var versionEl = document.getElementById('demo-version-tag');
  var card      = document.getElementById('demo-card');
  var steps     = ['pipe-validate', 'pipe-normalize', 'pipe-store'];

  steps.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('active', 'done');
  });
  if (card)      card.classList.remove('updated');
  if (valueEl)   valueEl.textContent = '—';
  if (metaEl)    metaEl.textContent  = t('demo.waiting');
  if (barEl)     barEl.style.width   = '0%';
  if (versionEl) versionEl.textContent = 'v—';
  if (btn) {
    btn.disabled = true;
    btn.querySelector('[data-i18n]').textContent = '→ ' + t('demo.btn') + '…';
  }
  if (statusEl) statusEl.textContent = '→ POST /api/metrics';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var T = reduced ? [0,0,0,0] : [400, 900, 1500, 2100];

  setTimeout(function() {
    var el = document.getElementById('pipe-validate');
    if (el) el.classList.add('active');
    if (statusEl) statusEl.textContent = '→ ' + t('demo.validated') + '…';
  }, T[0]);

  setTimeout(function() {
    var v = document.getElementById('pipe-validate');
    var n = document.getElementById('pipe-normalize');
    if (v) { v.classList.remove('active'); v.classList.add('done'); }
    if (n) n.classList.add('active');
    if (statusEl) statusEl.textContent = '→ ' + t('demo.normalized') + '…';
  }, T[1]);

  setTimeout(function() {
    var n = document.getElementById('pipe-normalize');
    var s = document.getElementById('pipe-store');
    if (n) { n.classList.remove('active'); n.classList.add('done'); }
    if (s) s.classList.add('active');
    if (statusEl) statusEl.textContent = '→ ' + t('demo.stored') + '…';
  }, T[2]);

  setTimeout(function() {
    var s = document.getElementById('pipe-store');
    if (s) { s.classList.remove('active'); s.classList.add('done'); }
    if (valueEl) valueEl.textContent = '1,243';
    if (metaEl) {
      var now = new Date().toISOString().replace('T', ' ').substring(0, 19) + 'Z';
      metaEl.textContent = 'latency ~2s · ' + now;
    }
    if (barEl)     barEl.style.width = '62%';
    if (versionEl) versionEl.textContent = 'v1';
    if (card) {
      card.classList.add('updated');
      setTimeout(function() { if (card) card.classList.remove('updated'); }, 2000);
    }
    if (statusEl) statusEl.textContent = '✓ ' + t('demo.stored') + ' — active_users: 1243';
    setTimeout(function() {
      if (btn) {
        btn.disabled = false;
        btn.querySelector('[data-i18n]').textContent = t('demo.btn');
      }
      demoRunning = false;
    }, 1200);
  }, T[3]);
}

/* ── Signup form ───────────────────────────────────────────── */
async function handleSignup(e) {
  e.preventDefault();
  var form    = e.target;
  var emailEl = form.querySelector('input[type="email"]');
  var statusEl= document.getElementById('cta-form-status');
  var btn     = form.querySelector('button[type="submit"]');
  if (!emailEl || !statusEl || !btn) return;

  var email   = emailEl.value.trim();
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRe.test(email)) {
    statusEl.textContent = t('form.invalid');
    statusEl.className   = 'form-status error';
    emailEl.focus();
    return;
  }

  var orig        = btn.textContent;
  btn.textContent = t('form.sending');
  btn.disabled    = true;
  statusEl.textContent = '';
  statusEl.className   = 'form-status';

  try {
    var res = await fetch('https://formspree.io/f/xykoenzg', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify({ email: email })
    });
    if (res.ok) {
      statusEl.textContent = '✓ ' + t('form.success');
      statusEl.className   = 'form-status success';
      emailEl.value        = '';
    } else {
      throw new Error();
    }
  } catch(_) {
    statusEl.textContent = t('form.error');
    statusEl.className   = 'form-status error';
  }

  btn.textContent = orig;
  btn.disabled    = false;
}

/* ── Smooth scroll ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  // Init theme
  var savedTheme = localStorage.getItem('dp-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  var tb = document.getElementById('theme-btn');
  if (tb) tb.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

  // Init lang
  var savedLang = localStorage.getItem('dp-lang') || 'en';
  setLang(savedLang);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href   = a.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
