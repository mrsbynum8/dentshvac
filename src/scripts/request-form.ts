// Shared submit handler for every form.rf (RequestForm + QuoteCard). Posts to the GHL inbound webhook.
for (const form of document.querySelectorAll<HTMLFormElement>('form.rf')) {
    const msg = form.querySelector<HTMLElement>('.rf-msg')!;
    const btn = form.querySelector<HTMLButtonElement>('.rf-send')!;
    const started = Date.now();
    const label = btn.innerHTML;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
      form.classList.remove('is-error');
      if (data.company_website || Date.now() - started < 2500) return; // bots
      if (!data.name?.trim()) {
        msg.textContent = 'Please add your name so Gerald knows who to ask for.';
        form.classList.add('is-error');
        form.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
        return;
      }
      if (!data.phone?.trim() && !data.email?.trim()) {
        msg.textContent = 'Add a phone number or an email so Gerald can reach you.';
        form.classList.add('is-error');
        form.querySelector<HTMLInputElement>('input[name="phone"]')?.focus();
        return;
      }
      delete data.company_website;
      btn.disabled = true;
      btn.textContent = 'Sending…';
      msg.textContent = '';
      try {
        const res = await fetch(form.dataset.webhook!, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, source: form.dataset.source, location: 'St. Louis, MO' }),
        });
        if (!res.ok) throw new Error(String(res.status));
        // GA4 lead event (mark generate_lead as a key event in GA4 admin). No personal data is sent.
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', 'generate_lead', {
          form_source: form.dataset.source,
          service: data.service || undefined,
        });
        form.classList.add('is-sent');
        form.innerHTML =
          '<div class="rf-done"><h3>Got it. Thank you.</h3><p>Your request went straight to Gerald. He’ll reach out using the number or email you gave. If it can’t wait, call <a href="tel:+13144207803">314-420-7803</a>.</p></div>';
      } catch {
        btn.disabled = false;
        btn.innerHTML = label;
        form.classList.add('is-error');
        msg.innerHTML = 'That didn’t send. Please call <a href="tel:+13144207803">314-420-7803</a> instead.';
      }
    });
  }
