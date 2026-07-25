import { PRODUCTS, GALLERY, ROPE_COLORS, FAQS, PHONE_NUMBER, DISPLAY_PHONE, SHOWROOM_ADDRESS, LOGO_URL } from '../data/siteData';

export interface ElementorElement {
  id: string;
  elType: 'container' | 'widget';
  isInner?: boolean;
  widgetType?: string;
  settings: Record<string, any>;
  elements?: ElementorElement[];
}

export interface ElementorTemplate {
  version: string;
  title: string;
  type: string;
  content: ElementorElement[];
}

export const generateElementorJson = (): ElementorTemplate => {
  return {
    version: "0.4",
    title: "Ellegance Móveis - Elementor HTML Containers Export",
    type: "page",
    content: [
      // 1. HEADER SECTION CONTAINER
      {
        id: "container_header",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_header_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<header style="position: sticky; top: 0; z-index: 50; background-color: #ffffff; border-bottom: 1px solid #dce5e7; padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; font-family: 'Plus Jakarta Sans', sans-serif;">
  <a href="#inicio"><img src="${LOGO_URL}" alt="Ellegance Móveis" style="height: 48px; width: auto;" /></a>
  <nav style="display: flex; gap: 28px; align-items: center;">
    <a href="#colecao" style="color: #344b55; font-weight: 700; text-decoration: none; font-size: 14px;">Coleção</a>
    <a href="#cores" style="color: #344b55; font-weight: 700; text-decoration: none; font-size: 14px;">Cores de Corda</a>
    <a href="#galeria" style="color: #344b55; font-weight: 700; text-decoration: none; font-size: 14px;">Ambientes Reais</a>
    <a href="#diferenciais" style="color: #344b55; font-weight: 700; text-decoration: none; font-size: 14px;">Diferenciais</a>
    <a href="#faq" style="color: #344b55; font-weight: 700; text-decoration: none; font-size: 14px;">Dúvidas</a>
  </nav>
  <a href="https://wa.me/${PHONE_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" style="background-color: #0787c8; color: #ffffff; font-weight: 800; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; gap: 8px;">Pedir orçamento &#x2197;</a>
</header>`
            }
          }
        ]
      },

      // 2. HERO SECTION CONTAINER
      {
        id: "container_hero",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_hero_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<section id="inicio" style="background: linear-gradient(112deg, #ffffff 0%, #f8f6f0 100%); padding: 100px 40px 80px 40px; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 48px; align-items: center;">
    <div>
      <span style="color: #0787c8; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; font-size: 13px; display: block; margin-bottom: 12px;">Artesanal &middot; Sofisticado &middot; Dur&aacute;vel</span>
      <h1 style="font-family: 'Playfair Display', serif; color: #132a34; font-size: 52px; font-weight: 500; line-height: 1.15; margin: 0 0 20px 0;">Eleg&acirc;ncia e conforto para o seu espa&ccedil;o.</h1>
      <p style="color: #607078; font-size: 18px; line-height: 1.6; margin: 0 0 32px 0;">M&oacute;veis em corda n&aacute;utica feitos para transformar &aacute;reas internas e externas em ambientes &uacute;nicos. Design autoral, ergonomia acolhedora e acabamento de alto padr&atilde;o.</p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <a href="https://wa.me/${PHONE_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" style="background-color: #0787c8; color: #ffffff; font-weight: 800; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-size: 15px;">Falar com um especialista &#x2197;</a>
        <a href="#colecao" style="background-color: #f7f3ec; color: #07516f; font-weight: 700; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-size: 15px; border: 1px solid #dce5e7;">Ver cat&aacute;logo de m&oacute;veis</a>
      </div>
    </div>
    <div style="text-align: center;">
      <img src="https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-natural.webp" alt="Living Natural Ellegance" style="width: 100%; max-width: 560px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.08);" />
    </div>
  </div>
</section>`
            }
          }
        ]
      },

      // 3. PROMISE STRIP CONTAINER
      {
        id: "container_promise_strip",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_promise_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<div style="background-color: #0787c8; padding: 20px; text-align: center; color: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 16px; font-weight: 800; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">
    <span>&check; Design autoral</span>
    <span>&check; Resist&ecirc;ncia ao sol e &agrave; chuva</span>
    <span>&check; Conforto que acolhe</span>
    <span>&check; Acabamento premium</span>
  </div>
</div>`
            }
          }
        ]
      },

      // 4. PRODUCTS COLLECTION CONTAINER
      {
        id: "container_products",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_products_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<section id="colecao" style="padding: 90px 40px; background-color: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1280px; margin: 0 auto;">
    <div style="text-align: center; max-width: 700px; margin: 0 auto 60px auto;">
      <h2 style="font-family: 'Playfair Display', serif; color: #132a34; font-size: 40px; margin: 0 0 16px 0;">Pe&ccedil;as que transformam ambientes.</h2>
      <p style="color: #607078; font-size: 17px; margin: 0;">Desenvolvidas com cordas n&aacute;uticas de alta resist&ecirc;ncia e tecidos imperme&aacute;veis de alta performance.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 32px;">
      ${PRODUCTS.map(p => `
      <div style="background-color: #faf8f4; border: 1px solid #ebe7df; border-radius: 20px; overflow: hidden;">
        <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 260px; object-fit: cover;" />
        <div style="padding: 24px;">
          <h3 style="font-family: 'Playfair Display', serif; color: #132a34; font-size: 24px; margin: 0 0 12px 0;">${p.title}</h3>
          <p style="color: #607078; font-size: 14px; line-height: 1.6; margin: 0 0 20px 0;">${p.description}</p>
          <a href="https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(p.whatsappMessage)}" target="_blank" style="color: #07516f; font-weight: 800; text-decoration: none; font-size: 14px;">Ver op&ccedil;&otilde;es no WhatsApp &#x2197;</a>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>`
            }
          }
        ]
      },

      // 5. ROPE COLORS PALETTE CONTAINER
      {
        id: "container_rope_colors",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_rope_colors_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<section id="cores" style="padding: 90px 40px; background-color: #f8f6f0; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1280px; margin: 0 auto;">
    <div style="text-align: center; max-width: 700px; margin: 0 auto 50px auto;">
      <h2 style="font-family: 'Playfair Display', serif; color: #132a34; font-size: 40px; margin: 0 0 16px 0;">Paleta de Cores em Corda N&aacute;utica</h2>
      <p style="color: #607078; font-size: 17px; margin: 0;">Variedade de tonalidades tratadas contra raios UV para harmonizar perfeitamente com seu projeto arquitet&ocirc;nico.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
      ${ROPE_COLORS.map(c => `
      <div style="background-color: #ffffff; padding: 24px; border-radius: 16px; border: 1px solid #e2ded5; display: flex; align-items: center; gap: 16px;">
        <span style="width: 48px; height: 48px; border-radius: 12px; background-color: ${c.hex}; display: inline-block; flex-shrink: 0; border: 1px solid rgba(0,0,0,0.1);"></span>
        <div>
          <h4 style="color: #132a34; margin: 0 0 4px 0; font-size: 16px; font-weight: 700;">${c.name}</h4>
          <p style="color: #607078; margin: 0; font-size: 13px;">${c.description}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>`
            }
          }
        ]
      },

      // 6. GALLERY CONTAINER
      {
        id: "container_gallery",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_gallery_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<section id="galeria" style="padding: 90px 40px; background-color: #f5f1e9; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1280px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 50px;">
      <h2 style="font-family: 'Playfair Display', serif; color: #132a34; font-size: 40px; margin: 0 0 12px 0;">Ambientes reais, feitos para viver.</h2>
      <p style="color: #607078; font-size: 16px; margin: 0;">Projetos de clientes transformados com nossos m&oacute;veis em corda n&aacute;utica.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px;">
      ${GALLERY.map(g => `
      <img src="${g.image}" alt="${g.title}" style="width: 100%; height: 280px; object-fit: cover; border-radius: 16px;" />`).join('')}
    </div>
  </div>
</section>`
            }
          }
        ]
      },

      // 7. DIFFERENTIALS / CRAFT CONTAINER
      {
        id: "container_craft",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_craft_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<section id="diferenciais" style="padding: 90px 40px; background-color: #0b4056; color: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: center;">
    <div>
      <span style="color: #8edafb; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; font-size: 13px; display: block; margin-bottom: 12px;">Processo Artesanal</span>
      <h2 style="font-family: 'Playfair Display', serif; font-size: 38px; margin: 0 0 20px 0; line-height: 1.2;">Da escolha da corda ao &uacute;ltimo detalhe.</h2>
      <p style="color: rgba(255,255,255,0.8); font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">Cada pe&ccedil;a &eacute; concebida unindo tecnologia de alta resist&ecirc;ncia ao tran&ccedil;ado manual cuidadoso de nossos artes&atilde;os.</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="background-color: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 24px; border-radius: 16px;">
        <h4 style="font-size: 18px; margin: 0 0 8px 0; color: #8edafb;">Resist&ecirc;ncia ao Clima</h4>
        <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 14px;">Materiais selecionados com alta prote&ccedil;&atilde;o UV para &aacute;reas cobertas e externas.</p>
      </div>
      <div style="background-color: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 24px; border-radius: 16px;">
        <h4 style="font-size: 18px; margin: 0 0 8px 0; color: #8edafb;">Conforto de Verdade</h4>
        <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 14px;">Ergonomia, propor&ccedil;&otilde;es estudadas e estofados de alta densidade que acolhem o corpo.</p>
      </div>
      <div style="background-color: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 24px; border-radius: 16px;">
        <h4 style="font-size: 18px; margin: 0 0 8px 0; color: #8edafb;">Acabamento Artesanal</h4>
        <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 14px;">Tramas manuais feitas com rigor e carinho em cada encontro do tran&ccedil;ado.</p>
      </div>
    </div>
  </div>
</section>`
            }
          }
        ]
      },

      // 8. FAQ CONTAINER
      {
        id: "container_faq",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_faq_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<section id="faq" style="padding: 90px 40px; background-color: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 900px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 50px;">
      <h2 style="font-family: 'Playfair Display', serif; color: #132a34; font-size: 38px; margin: 0 0 12px 0;">Antes de escolher (D&uacute;vidas Frequentes)</h2>
      <p style="color: #607078; font-size: 16px; margin: 0;">Tudo o que voc&ecirc; precisa saber sobre durabilidade, cuidados e personaliza&ccedil;&atilde;o.</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${FAQS.map(f => `
      <details style="background-color: #faf8f4; border: 1px solid #ebe7df; border-radius: 12px; padding: 20px; cursor: pointer;">
        <summary style="font-weight: 700; color: #132a34; font-size: 16px;">${f.question}</summary>
        <p style="margin: 16px 0 0 0; color: #607078; font-size: 14px; line-height: 1.6;">${f.answer}</p>
      </details>`).join('')}
    </div>
  </div>
</section>`
            }
          }
        ]
      },

      // 9. CONTACT CTA CONTAINER
      {
        id: "container_contact_cta",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_cta_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<section style="background: linear-gradient(135deg, #07516f 0%, #0787c8 100%); padding: 80px 40px; text-align: center; color: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 800px; margin: 0 auto;">
    <h2 style="font-family: 'Playfair Display', serif; font-size: 42px; margin: 0 0 16px 0;">Pronto para transformar seu espa&ccedil;o?</h2>
    <p style="font-size: 18px; margin: 0 0 32px 0; color: rgba(255,255,255,0.9);">Fale diretamente com nossa equipe e receba um or&ccedil;amento exclusivo para o seu projeto. Atendimento: ${DISPLAY_PHONE}</p>
    <a href="https://wa.me/${PHONE_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" style="background-color: #25d366; color: #ffffff; font-weight: 800; padding: 18px 36px; border-radius: 12px; text-decoration: none; font-size: 16px; display: inline-block; box-shadow: 0 10px 25px rgba(37,211,102,0.3);">Solicitar Or&ccedil;amento no WhatsApp &#x2197;</a>
  </div>
</section>`
            }
          }
        ]
      },

      // 10. FOOTER CONTAINER
      {
        id: "container_footer",
        elType: "container",
        isInner: false,
        settings: {
          content_width: "full",
          container_type: "flex",
          padding: { unit: "px", top: "0", right: "0", bottom: "0", left: "0", isLinked: true }
        },
        elements: [
          {
            id: "widget_footer_html",
            elType: "widget",
            widgetType: "html",
            settings: {
              html: `<footer style="background-color: #0c252f; color: #ffffff; padding: 60px 40px 30px 40px; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 40px;">
    <div>
      <img src="${LOGO_URL}" alt="Ellegance" style="height: 48px; filter: brightness(0) invert(1); margin-bottom: 20px;" />
      <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.6; margin: 0;">M&oacute;veis artesanais em corda n&aacute;utica com alto padr&atilde;o de qualidade e acabamento.</p>
    </div>
    <div>
      <h4 style="color: #8edafb; font-size: 16px; margin: 0 0 16px 0;">Showroom &amp; Atendimento</h4>
      <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.6; margin: 0;">${SHOWROOM_ADDRESS}</p>
      <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 8px 0 0 0;">Telefone: ${DISPLAY_PHONE}</p>
    </div>
  </div>
  <div style="max-width: 1280px; margin: 20px auto 0 auto; text-align: center; color: rgba(255,255,255,0.5); font-size: 12px;">
    &copy; 2026 Ellegance M&oacute;veis &middot; Todos os direitos reservados
  </div>
</footer>`
            }
          }
        ]
      }
    ]
  };
};

export const downloadElementorJsonFile = () => {
  const data = generateElementorJson();
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "elementor-ellegance-moveis-html-containers.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
