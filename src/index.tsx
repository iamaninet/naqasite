import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()


app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>نقاء – مبادرة توعوية للنفايات الإلكترونية</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link rel="icon" type="image/svg+xml" href="/static/naqa.ico"/>
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css"/>
  <link rel="stylesheet" href="/static/style.css"/>
</head>
<body>

<!-- ========== NAVBAR ========== -->
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <div class="nav-logo">
      <div class="logo-mark">
        <img src="/static/logo-naqaa.png" alt="شعار نقاء" class="her"/>

      </div>
      <span class="logo-text">نقاء</span>
    </div>
    <ul class="nav-links" id="navLinks">
      <li><a href="#hero" class="nav-link active">الرئيسية</a></li>
      <li><a href="#about" class="nav-link">عن المبادرة</a></li>
      <li><a href="#problem" class="nav-link">المشكلة</a></li>
      <li><a href="#solutions" class="nav-link">الحلول</a></li>
      <li><a href="#stats" class="nav-link">أرقام وحقائق</a></li>
      <li><a href="#tips" class="nav-link">نصائح</a></li>
      <li><a href="#learn" class="nav-link">تجربة تعليمية</a></li>
      <li><a href="#contact" class="nav-link">تواصل معنا</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="القائمة">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ========== HERO ========== -->
<section class="hero" id="hero">
  <div class="hero-bg-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="particles" id="particles"></div>
  </div>
  <div class="hero-content">
    <div class="hero-badge">
      
    </div>
    <div class="hero-logo-circle">
      <div class="hero-logo-img-wrap">
        <img src="/static/logo-naqaa.png" alt="شعار نقاء" class="hero-logo-img"/>
        <div class="logo-img-glow"></div>
      </div>
    </div>
    <h1 class="hero-title">
      <span class="title-naqaa">نقاء</span>
      <span class="title-sub">تقنية نظيفة.. بيئة نقية</span>
    </h1> 
    <p class="hero-desc">
      مبادرة توعوية تهدف إلى تثقيف المجتمع بمخاطر النفايات الإلكترونية، 
      وتعزيز ثقافة الاستدامة البيئية للحفاظ على كوكبنا للأجيال القادمة.
    </p>
    <div class="hero-actions">
      <a href="#about" class="btn btn-primary">
        <i class="fas fa-arrow-down"></i>
        اكتشف المبادرة
      </a>
      <a href="#learn" class="btn btn-outline">
        <i class="fa-solid fa-chalkboard-user"></i>
       ابدأ رحلة الجهاز الاخير 
      </a> 
    </div> 
    <div class="hero-scroll-hint">
      <div class="scroll-dot"></div>
    </div>
  </div>
</section> 

<!-- ========== ABOUT ========== -->
<section class="about" id="about">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">من نحن</span>
      <h2 class="section-title">عن مبادرة <span class="highlight">نقاء</span></h2>
      <p class="section-desc">رؤيتنا نحو عالم خالٍ من تلوث النفايات الإلكترونية</p>
    </div>
    <div class="about-grid">
      <div class="about-card animate-on-scroll">
        <div class="about-icon" style="background: var(--c-green-light);">
          <i class="fas fa-bullseye" style="color: var(--c-green-dark);"></i>
        </div>
        <h3>رسالتنا</h3>
        <p>نسعى إلى نشر الوعي البيئي في مجتمعاتنا، وتوعية الأفراد بأضرار النفايات الإلكترونية على الصحة والبيئة من خلال حملات توعوية مستمرة.</p>
      </div>
      <div class="about-card animate-on-scroll">
        <div class="about-icon" style="background: var(--c-blue-light);">
          <i class="fas fa-eye" style="color: var(--c-teal);"></i>
        </div>
        <h3>رؤيتنا</h3>
        <p>نحلم ببيئة نظيفة وصحية، حيث يكون كل فرد مسؤولاً عن خياراته الاستهلاكية ويساهم في بناء مستقبل مستدام لأجيال قادمة.</p>
      </div>
      <div class="about-card animate-on-scroll">
        <div class="about-icon" style="background: var(--c-green-light);">
          <i class="fas fa-heart" style="color: var(--c-green-dark);"></i>
        </div>
        <h3>قيمنا</h3>
        <p>المسؤولية البيئية، والتعاون المجتمعي، والشفافية، والابتكار في إيجاد حلول بيئية فعّالة ومستدامة تحقق الفائدة للجميع.</p>
      </div>
    </div>
    <div class="about-visual animate-on-scroll">
      <div class="visual-card main-visual">
        <div class="visual-icon-wrap">
          <i class="fas fa-recycle visual-icon"></i>
        </div>
        <h3>التخلص الآمن من الإلكترونيات</h3>
        <p>كل جهاز إلكتروني تستخدمه له دورة حياة. عند انتهائها، كيف تتصرف؟ نقاء تعلّمك الطريق الصحيح.</p>
        <div class="visual-tags">
          <span class="tag">♻️ إعادة التدوير</span>
          <span class="tag">🌱 الاستدامة</span>
          <span class="tag">💚 البيئة</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== PROBLEM ========== -->
<section class="problem" id="problem">
  <div class="container">
    <div class="section-header light">
      <span class="section-tag light">التحدي</span>
      <h2 class="section-title">خطر <span class="highlight-light">النفايات الإلكترونية</span></h2>
      <p class="section-desc">الأجهزة القديمة تُشكّل تهديداً حقيقياً على صحتنا وبيئتنا</p>
    </div>
    <div class="problems-grid">
      <div class="problem-card animate-on-scroll">
        <div class="problem-icon">
          <i class="fas fa-skull-crossbones"></i>
        </div>
        <h3>مواد سامة</h3>
        <p>تحتوي الأجهزة الإلكترونية على مواد خطيرة كالرصاص والزئبق والكادميوم التي تتسرب للتربة والمياه.</p>
      </div>
      <div class="problem-card animate-on-scroll">
        <div class="problem-icon">
          <i class="fas fa-lungs"></i>
        </div>
        <h3>تلوث الهواء</h3>
        <p>حرق النفايات الإلكترونية يُطلق غازات سامة تضر بالجهاز التنفسي وتُسهم في الاحترار العالمي.</p>
      </div>
      <div class="problem-card animate-on-scroll">
        <div class="problem-icon">
          <i class="fas fa-water"></i>
        </div>
        <h3>تلوث المياه</h3>
        <p>المعادن الثقيلة تتسرب للمياه الجوفية مما يُلوّث مصادر مياه الشرب ويُهدد حياة الأحياء البحرية.</p>
      </div>
      <div class="problem-card animate-on-scroll">
        <div class="problem-icon">
          <i class="fas fa-seedling"></i>
        </div>
        <h3>تدمير التربة</h3>
        <p>تلوث التربة بالمواد الكيميائية يجعلها غير صالحة للزراعة لعقود طويلة مما يهدد الأمن الغذائي.</p>
      </div>
      <div class="problem-card animate-on-scroll">
        <div class="problem-icon">
          <i class="fas fa-heartbeat"></i>
        </div>
        <h3>أضرار صحية</h3>
        <p>التعرض للمواد السامة يسبب أمراضاً خطيرة كالسرطان واضطرابات عصبية وأمراض الجهاز التنفسي.</p>
      </div>
      <div class="problem-card animate-on-scroll">
        <div class="problem-icon">
          <i class="fas fa-mountain"></i>
        </div>
        <h3>تراكم النفايات</h3>
        <p>ينتج العالم أكثر من 50 مليون طن من النفايات الإلكترونية سنوياً، ومعظمها ينتهي في مكبّات غير آمنة.</p>
      </div>
    </div>
  </div>
</section>

<!-- ========== STATS ========== -->
<section class="stats" id="stats">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">أرقام صادمة</span>
      <h2 class="section-title">حقائق وأرقام عن <span class="highlight">النفايات الإلكترونية</span></h2>
    </div>
    <div class="stats-grid">
      <div class="stat-card animate-on-scroll">
        <div class="stat-icon"><i class="fas fa-weight-hanging"></i></div>
        <div class="stat-number" data-target="62">0</div>
        <div class="stat-unit">مليون طن</div>
        <div class="stat-label">حجم النفايات الإلكترونية عالمياً سنوياً</div>
      </div>
      <div class="stat-card animate-on-scroll">
        <div class="stat-icon"><i class="fas fa-recycle"></i></div>
        <div class="stat-number" data-target="22">0</div>
        <div class="stat-unit">%</div>
        <div class="stat-label">فقط من النفايات يُعاد تدويره بشكل رسمي</div>
      </div>
      <div class="stat-card animate-on-scroll">
        <div class="stat-icon"><i class="fas fa-chart-line"></i></div>
        <div class="stat-number" data-target="82">0</div>
        <div class="stat-unit">مليون طن</div>
        <div class="stat-label">المتوقع بحلول 2030 إذا لم نتحرك</div>
      </div>
      <div class="stat-card animate-on-scroll">
        <div class="stat-icon"><i class="fas fa-coins"></i></div>
        <div class="stat-number" data-target="57">0</div>
        <div class="stat-unit">مليار دولار</div>
        <div class="stat-label">قيمة المعادن النفيسة في النفايات الإلكترونية</div>
      </div>
    </div>
  </div>
</section>

<!-- ========== SOLUTIONS ========== -->
<section class="solutions" id="solutions">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">الحلول</span>
      <h2 class="section-title">ماذا يمكننا أن <span class="highlight">نفعل؟</span></h2>
      <p class="section-desc">خطوات عملية يمكن لكل فرد اتخاذها للحدّ من النفايات الإلكترونية</p>
    </div>
    <div class="solutions-timeline">
      <div class="timeline-item animate-on-scroll">
        <div class="timeline-icon">
          <i class="fas fa-tools"></i>
        </div>
        <div class="timeline-content">
          <h3>إصلاح بدلاً من الاستبدال</h3>
          <p>قبل التخلص من جهازك القديم، حاول إصلاحه. كثير من الأعطال بسيطة ويمكن إصلاحها بتكلفة منخفضة، وهذا يُطيل عمر الجهاز ويُقلل النفايات.</p>
          <span class="timeline-tag">توفير + استدامة</span>
        </div>
      </div>
      <div class="timeline-item animate-on-scroll">
        <div class="timeline-icon">
          <i class="fas fa-recycle"></i>
        </div>
        <div class="timeline-content">
          <h3>مراكز إعادة التدوير المعتمدة</h3>
          <p>استخدم مراكز إعادة التدوير المعتمدة للتخلص من أجهزتك القديمة. هذه المراكز تعالج المواد الخطرة بطرق آمنة وتُعيد استخدام المواد القيّمة.</p>
          <span class="timeline-tag">آمن + مسؤول</span>
        </div>
      </div>
      <div class="timeline-item animate-on-scroll">
        <div class="timeline-icon">
          <i class="fas fa-exchange-alt"></i>
        </div>
        <div class="timeline-content">
          <h3>التبادل والبيع المستعمل</h3>
          <p>جهازك القديم قد يكون كنزاً لشخص آخر. بيع أو تبادل الأجهزة المستعملة يُطيل دورة حياتها ويُقلل الطلب على إنتاج أجهزة جديدة.</p>
          <span class="timeline-tag">اقتصادي + بيئي</span>
        </div>
      </div>
      <div class="timeline-item animate-on-scroll">
        <div class="timeline-icon">
          <i class="fas fa-hands-helping"></i>
        </div>
        <div class="timeline-content">
          <h3>التبرع للمدارس والجمعيات</h3>
          <p>الأجهزة التي لا تحتاجها قد تُغيّر حياة طالب. تبرّع بأجهزتك للمدارس أو الجمعيات الخيرية لتُعطيها فرصة حياة ثانية.</p>
          <span class="timeline-tag">خيري + اجتماعي</span>
        </div>
      </div>
      <div class="timeline-item animate-on-scroll">
        <div class="timeline-icon">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div class="timeline-content">
          <h3>الاستهلاك الواعي</h3>
          <p>فكّر مرتين قبل شراء جهاز جديد. هل تحتاجه فعلاً؟ اختر المنتجات ذات الجودة العالية والعمر الطويل، وتجنب التحديث غير الضروري.</p>
          <span class="timeline-tag">وعي + تخطيط</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== TIPS ========== -->
<section class="tips" id="tips">
  <div class="container">
    <div class="section-header light">
      <span class="section-tag light">نصائح عملية</span>
      <h2 class="section-title">كيف تبدأ اليوم؟</h2>
      <p class="section-desc">خطوات صغيرة تصنع فارقاً كبيراً</p>
    </div>
    <div class="tips-masonry">
      <div class="tip-card tip-featured animate-on-scroll">
        <div class="tip-num">01</div>
        <i class="fas fa-mobile-alt tip-icon"></i>
        <h3>امسح بياناتك قبل التخلص</h3>
        <p>قبل التبرع أو بيع أو إعادة تدوير جهازك، تأكد من مسح جميع بياناتك الشخصية بشكل كامل وآمن لحماية خصوصيتك.</p>
      </div>
      <div class="tip-card animate-on-scroll">
        <div class="tip-num">02</div>
        <i class="fas fa-battery-full tip-icon"></i>
        <h3>اعتنِ ببطارياتك</h3>
        <p>البطاريات من أخطر النفايات. لا تتخلص منها في سلة المهملات العادية، واستخدم نقاط التجميع المخصصة لها.</p>
      </div>
      <div class="tip-card animate-on-scroll">
        <div class="tip-num">03</div>
        <i class="fas fa-box-open tip-icon"></i>
        <h3>احتفظ بالأجهزة في مكان واحد</h3>
        <p>خصّص صندوقاً في بيتك لجمع الأجهزة الإلكترونية القديمة بدلاً من رميها فوراً، حتى تتسنى لك الفرصة للتصرف الصحيح.</p>
      </div>
      <div class="tip-card animate-on-scroll">
        <div class="tip-num">04</div>
        <i class="fas fa-users tip-icon"></i>
        <h3>ثقّف من حولك</h3>
        <p>شارك هذه المعلومات مع عائلتك وأصدقائك. تغيير ثقافة المجتمع يبدأ بمحادثة واحدة.</p>
      </div>
      <div class="tip-card tip-featured-2 animate-on-scroll">
        <div class="tip-num">05</div>
        <i class="fas fa-store tip-icon"></i>
        <h3>استفسر من المتجر عن برامج الإرجاع</h3>
        <p>كثير من متاجر الإلكترونيات تُقدّم برامج لاستعادة الأجهزة القديمة. عند شراء جهاز جديد، اسأل عن إمكانية إرجاع جهازك القديم للمتجر.</p>
      </div>
      <div class="tip-card animate-on-scroll">
        <div class="tip-num">06</div>
        <i class="fas fa-map-marker-alt tip-icon"></i>
        <h3>اعرف أقرب مركز تدوير</h3>
        <p>ابحث عن مراكز إعادة التدوير في منطقتك واحفظ عنوانها. المعرفة المسبقة تجعل الفعل أسهل عند الحاجة.</p>
      </div>
    </div>
  </div>
</section>

<!-- ========== JOIN ========== -->
<section class="join">
  <div class="container">
    <div class="join-card animate-on-scroll">
      <div class="join-decoration"></div>
      <div class="join-text">
        <span class="section-tag">كن جزءاً من الحل</span>
        <h2>انضم إلى <span class="highlight">نقاء</span> وساهم في التغيير</h2>
        <p>معاً نستطيع بناء ثقافة بيئية أفضل. انضم إلى مجتمعنا المتنامي من المهتمين بالاستدامة وابدأ رحلتك نحو بيئة أنظف.</p>
        <div class="join-points">
          <div class="join-point"><i class="fas fa-check-circle"></i> محتوى توعوي حصري</div>
          <div class="join-point"><i class="fas fa-check-circle"></i> فعاليات وورش عمل</div>
          <div class="join-point"><i class="fas fa-check-circle"></i> مجتمع داعم ومتفاعل</div>
          <div class="join-point"><i class="fas fa-check-circle"></i> دليل أقرب مراكز التدوير</div>
        </div>
      </div>
      <div class="join-action">
        <div class="join-circles">
          <div class="jc jc1"><i class="fas fa-leaf"></i></div>
          <div class="jc jc2"><i class="fas fa-recycle"></i></div>
          <div class="jc jc3"><i class="fas fa-globe"></i></div>
          <div class="jc-center"><i class="fas fa-heart"></i></div>
        </div>
        <a href="#contact" class="btn btn-white">ابدأ الآن</a>
      </div>
    </div>
  </div>
</section>

<!-- ========== LEARN ========== -->
<section class="learn" id="learn">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">تجربة تعليمية</span>
      <h2 class="section-title">ابدأ رحلتك <span class="highlight">التعليمية</span></h2>
      <p class="section-desc">اكتسب وعياً بيئياً عبر تجربة تفاعلية ممتعة في دقائق معدودة</p>
    </div>

    <!-- LAUNCH CARD -->
    <div class="learn-launch animate-on-scroll">
      <div class="launch-bg-deco"></div>
      
      <div class="launch-right">
        <h3 class="launch-title">رحلة نقاء التعليمية</h3>
        <p class="launch-desc">تعرّف على مخاطر النفايات الإلكترونية، واختبر معلوماتك، واحصل على شهادة سفير نقاء.</p>
        <button class="btn-launch" id="openLearnModal">
          <span class="btn-launch-icon"><i class="fas fa-play"></i></span>
          <span class="btn-launch-text">ابدأ الآن</span>
          <span class="btn-launch-arrow"><i class="fas fa-arrow-left"></i></span>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- ========== CONTACT ========== -->
<section class="contact" id="contact">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">تواصل معنا</span>
      <h2 class="section-title">نحن هنا <span class="highlight">من أجلك</span></h2>
      <p class="section-desc">هل لديك سؤال أو ترغب في الانضمام أو الشراكة؟ راسلنا</p>
    </div>
    <div class="contact-wrapper">
      <div class="contact-info animate-on-scroll">
        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-envelope"></i></div>
          <div>
            <h4>البريد الإلكتروني</h4>
            <p>naqaeco@gmail.com</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i class="fab fa-instagram"></i></div>
          <div>
            <h4>انستغرام</h4>
            <p>naqaeco@</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i class="fab fa-twitter"></i></div>
          <div>
            <h4>X</h4>
            <p>naqaeco@</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-hashtag"></i></div>
          <div>
            <h4>الهاشتاق</h4>
            <p>#نقاء #مبادرة_نقاء</p>
          </div>
        </div>
      </div>
      <form class="contact-form animate-on-scroll" id="contactForm">
        <div class="form-row">
          <div class="form-group">
            <label for="name">الاسم الكامل</label>
            <input type="text" id="name" placeholder="أدخل اسمك" required/>
          </div>
          <div class="form-group">
            <label for="email">البريد الإلكتروني</label>
            <input type="email" id="email" placeholder="example@email.com" required/>
          </div>
        </div>
        <div class="form-group">
          <label for="subject">الموضوع</label>
          <select id="subject">
            <option value="">اختر الموضوع</option>
            <option value="join">الانضمام للمبادرة</option>
            <option value="partner">الشراكة والتعاون</option>
            <option value="question">استفسار عام</option>
            <option value="other">أخرى</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">رسالتك</label>
          <textarea id="message" rows="5" placeholder="اكتب رسالتك هنا..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-full">
          <i class="fas fa-paper-plane"></i>
          أرسل الرسالة
        </button>
      </form>
    </div>
  </div>
</section>

<!-- ========== FOOTER ========== -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="logo-mark small"><span class="logo-n">ن</span></div>
          <span class="logo-text">نقاء</span>
        </div>
        <p>مبادرة توعوية تُعنى بالتوعية بمخاطر النفايات الإلكترونية وتعزيز ثقافة الاستدامة البيئية في مجتمعاتنا.</p>
        <div class="social-links">
          <a href="https://instagram.com/naqaeco" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://x.com/naqaeco" class="social-link" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" class="social-link" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="mailto:naqaeco@gmail.com" class="social-link" aria-label="email"><i class="fa-solid fa-envelope"></i></a>

        </div>
      </div>
      <div class="footer-links-col">
        <h4>روابط سريعة</h4>
        <ul>
          <li><a href="#about">عن المبادرة</a></li>
          <li><a href="#problem">المشكلة</a></li>
          <li><a href="#solutions">الحلول</a></li>
          <li><a href="#stats">أرقام وحقائق</a></li>
          <li><a href="#tips">نصائح عملية</a></li>
        </ul>
      </div>
      <div class="footer-links-col">
        <h4>المبادرة</h4>
        <ul>
          <li><a href="#contact">انضم إلينا</a></li>
          <li><a href="#contact">الشراكات</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>
      </div>
      <div class="footer-pledge">
        <h4>وعد نقاء</h4>
        <div class="pledge-card">
          <i class="fas fa-quote-right"></i>
          <p>"أتعهد بالتخلص المسؤول من أجهزتي الإلكترونية، وأن أكون جزءاً من الحل لا المشكلة."</p>
          <button class="btn-pledge">خذ العهد معنا</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 مبادرة نقاء – جميع الحقوق محفوظة</p>
      <p>صُنع بـ 💚 من أجل بيئة أنقى</p>
    </div>
  </div>
</footer>

<script src="/static/app.js"></script>
</body>
</html>
`)
})

export default app
