// Bob — client-side logic. No external deps.
(function () {
  // ---------- Mobile menu ----------
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
    });
  }

  // ---------- Formspree submission ----------
  document.querySelectorAll('form[data-bob-form]').forEach(function (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var ok = form.querySelector('.form-success');
      var err = form.querySelector('.form-error');
      if (ok) ok.classList.remove('show');
      if (err) err.classList.remove('show');
      if (btn) { btn.disabled = true; btn.dataset.oldLabel = btn.textContent; btn.textContent = 'Invio...'; }
      try {
        var res = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form),
        });
        if (res.ok) {
          if (ok) ok.classList.add('show');
          form.reset();
        } else {
          if (err) err.classList.add('show');
        }
      } catch (_) {
        if (err) err.classList.add('show');
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = btn.dataset.oldLabel || 'Invia'; }
      }
    });
  });

  // ---------- Chat wizard ----------
  var chat = document.querySelector('[data-bob-chat]');
  if (chat) initChat(chat);

  function initChat(root) {
    var feed = root.querySelector('.chat-feed');
    var optionsEl = root.querySelector('.chat-options');
    var inputRow = root.querySelector('.chat-input-row');
    var resultEl = root.querySelector('.chat-result');
    var state = { service: null, city: null, when: null, freeText: '' };

    // Service keyword → category page slug
    var services = [
      { slug: 'idraulico',         label: 'Idraulico',          kw: ['idraulic','tubo','perdita','rubinetto','scarico','caldaia','wc','bagno allag','infiltrazion','boiler'] },
      { slug: 'elettricista',      label: 'Elettricista',       kw: ['elettric','corrente','salta luce','impianto elettric','presa','interruttore','contatore','quadro'] },
      { slug: 'pulizie',           label: 'Imprese di pulizie', kw: ['puliz','pulire','sanific','colf','domestic','dopo trasloc','vetri','condomin'] },
      { slug: 'imbianchino',       label: 'Imbianchino',        kw: ['imbianch','tinteggi','pittur','vernici','muri','pareti'] },
      { slug: 'traslochi',         label: 'Traslochi',          kw: ['trasloc','spostare mobil','imballagg','furgone','trasport mobil'] },
      { slug: 'tuttofare',         label: 'Tuttofare e montaggio mobili', kw: ['tuttofare','handyman','mont','ikea','fissaggio','quadri','mensol','riparazion casa'] },
      { slug: 'personal-trainer',  label: 'Personal trainer',   kw: ['personal trainer','allenament','fitness','palestra','dimagri','tonificare'] },
      { slug: 'dj-per-eventi',     label: 'DJ per eventi',      kw: ['dj','disc jockey','musica matrimon','musica festa','animazione musical'] },
      { slug: 'fotografi',         label: 'Fotografi',          kw: ['fotograf','foto matrimon','servizio fotografic','shooting','ritratto'] },
      { slug: 'ripetizioni',       label: 'Ripetizioni',        kw: ['ripetizion','tutor','lezione privat','matematic','fisic','ingles','tedesc','spagn','aiuto compit','prepar esam'] },
      { slug: 'supporto-excel',    label: 'Supporto Excel',     kw: ['excel','foglio di calcol','google sheet','formul','dashboard','vba','pivot','tabella pivot','power query'] },
    ];
    var cities = [
      { slug: 'milano', label: 'Milano' },
      { slug: 'roma',   label: 'Roma' },
      { slug: 'torino', label: 'Torino' },
    ];

    function botSay(text, delay) {
      delay = delay == null ? 600 : delay;
      var typing = document.createElement('div');
      typing.className = 'chat-msg bot';
      typing.innerHTML = '<span class="typing"><span></span><span></span><span></span></span>';
      feed.appendChild(typing);
      feed.scrollTop = feed.scrollHeight;
      return new Promise(function (resolve) {
        setTimeout(function () {
          typing.innerHTML = text;
          feed.scrollTop = feed.scrollHeight;
          resolve();
        }, delay);
      });
    }
    function userSay(text) {
      var m = document.createElement('div');
      m.className = 'chat-msg user';
      m.textContent = text;
      feed.appendChild(m);
      feed.scrollTop = feed.scrollHeight;
    }
    function setOptions(opts, onPick) {
      optionsEl.innerHTML = '';
      inputRow.style.display = 'none';
      optionsEl.style.display = 'flex';
      opts.forEach(function (o) {
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = o.label;
        b.addEventListener('click', function () { onPick(o); });
        optionsEl.appendChild(b);
      });
    }
    function setInput(placeholder, onSend) {
      optionsEl.innerHTML = '';
      optionsEl.style.display = 'none';
      inputRow.style.display = 'flex';
      var input = inputRow.querySelector('input');
      var btn = inputRow.querySelector('button');
      input.value = '';
      input.placeholder = placeholder;
      input.focus();
      function go() {
        var v = input.value.trim();
        if (!v) return;
        userSay(v);
        onSend(v);
      }
      btn.onclick = go;
      input.onkeydown = function (e) { if (e.key === 'Enter') go(); };
    }
    function matchService(text) {
      var t = text.toLowerCase();
      for (var i = 0; i < services.length; i++) {
        for (var j = 0; j < services[i].kw.length; j++) {
          if (t.indexOf(services[i].kw[j]) !== -1) return services[i];
        }
      }
      return null;
    }

    async function step1() {
      await botSay('Ciao! Sono l\'assistente di <strong>BOB</strong>. Dimmi in poche parole cosa stai cercando — ti porto al professionista giusto.', 300);
      setInput('Es. "mi serve un idraulico per una perdita"', async function (text) {
        state.freeText = text;
        var match = matchService(text);
        if (match) {
          state.service = match;
          await botSay('Perfetto, hai bisogno di un <strong>' + match.label + '</strong>. In che città?');
          step2();
        } else {
          await botSay('Capisco. Scegli la categoria più vicina a quello che ti serve:');
          setOptions(services.map(function (s) { return { label: s.label, value: s }; }), async function (o) {
            state.service = o.value;
            userSay(o.label);
            await botSay('Ottimo. In che città?');
            step2();
          });
        }
      });
    }

    async function step2() {
      setOptions(cities.concat([{ slug: 'altro', label: 'Altra città' }]), async function (o) {
        state.city = o;
        userSay(o.label);
        if (o.slug === 'altro') {
          await botSay('Per ora siamo attivi a Milano, Roma e Torino. Puoi comunque lasciarci la tua richiesta: i pro in nuove città vengono aggiunti rapidamente.');
        }
        await botSay('Quando ti servirebbe?');
        step3();
      });
    }

    async function step3() {
      setOptions(
        [
          { label: 'Subito / urgente', value: 'urgente' },
          { label: 'Questa settimana', value: 'settimana' },
          { label: 'Questo mese', value: 'mese' },
          { label: 'Sto solo esplorando', value: 'esplora' },
        ],
        async function (o) {
          state.when = o.value;
          userSay(o.label);
          await botSay('Tutto chiaro. Ti porto al servizio giusto.');
          showResult();
        }
      );
    }

    function showResult() {
      optionsEl.style.display = 'none';
      inputRow.style.display = 'none';
      var s = state.service, c = state.city;
      var base = root.getAttribute('data-base') || '';
      var serviceUrl = base + 'servizi/' + s.slug + '.html';
      var cityUrl = (c && c.slug !== 'altro') ? base + 'citta/' + c.slug + '.html' : null;
      var html = '<h3>' + s.label + (c && c.slug !== 'altro' ? ' a ' + c.label : '') + '</h3>' +
        '<p class="muted mb-0">Ecco la sezione più adatta alla tua richiesta. Da qui puoi richiedere un preventivo gratuito.</p>' +
        '<div class="cta-row">' +
        '<a class="btn btn-primary" href="' + serviceUrl + '">Vai a ' + s.label + '</a>' +
        (cityUrl ? '<a class="btn btn-secondary" href="' + cityUrl + '">Professionisti a ' + c.label + '</a>' : '') +
        '</div>';
      resultEl.innerHTML = html;
      resultEl.style.display = 'block';
      // Persist lead intent for the form on the destination page (optional)
      try {
        sessionStorage.setItem('bob_lead', JSON.stringify({
          service: s.label, slug: s.slug,
          city: c ? c.label : '',
          when: state.when, message: state.freeText
        }));
      } catch (_) {}
    }

    step1();
  }

  // ---------- Prefill form from sessionStorage if present ----------
  try {
    var lead = sessionStorage.getItem('bob_lead');
    if (lead) {
      var data = JSON.parse(lead);
      var serviceField = document.querySelector('[name="servizio"]');
      var cityField = document.querySelector('[name="citta"]');
      var msgField = document.querySelector('[name="messaggio"]');
      var whenField = document.querySelector('[name="quando"]');
      if (serviceField && data.service && !serviceField.value) serviceField.value = data.service;
      if (cityField && data.city && !cityField.value) cityField.value = data.city;
      if (msgField && data.message && !msgField.value) msgField.value = data.message;
      if (whenField && data.when && !whenField.value) whenField.value = data.when;
    }
  } catch (_) {}
})();
