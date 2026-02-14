import { useState } from 'react'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useHomeContent } from '../../context/HomeContentContext'
import {
  ChevronDown,
  ChevronRight,
  Home,
  RotateCcw,
  Save,
  Image as ImageIcon,
  MessageSquare,
  Users,
  Sparkles,
  Heart,
  Briefcase,
  Handshake,
  Megaphone,
} from 'lucide-react'

const SectionCard = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
      >
        {open ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        {Icon && <Icon size={20} className="text-accent-orange" strokeWidth={2} />}
        <span className="font-semibold text-primary-navy dark:text-white">{title}</span>
      </button>
      {open && <div className="px-6 pb-6 pt-0 border-t border-neutral-100 dark:border-neutral-800">{children}</div>}
    </div>
  )
}

const Input = ({ label, value, onChange, placeholder, type = 'text', rows }) => (
  <div className="space-y-1">
    {label && <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</label>}
    {rows ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange"
      />
    )}
  </div>
)

const AdminHomeContent = () => {
  useDocumentTitle('Admin - Home Content')
  const { content, updateSection, resetSection, resetAll } = useHomeContent()
  const [saved, setSaved] = useState(false)

  const showSaved = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary-navy dark:text-white">Home Page Content</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            Edit all sections that appear on the home page. Changes are saved automatically.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {saved && (
            <span className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400">
              <Save size={16} /> Saved
            </span>
          )}
          <button
            type="button"
            onClick={() => { resetAll(); showSaved(); }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-medium"
          >
            <RotateCcw size={16} /> Reset all to default
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Hero */}
        <SectionCard title="Hero" icon={Home} defaultOpen>
          <div className="grid gap-4 pt-4">
            <Input label="Badge" value={content.hero.badge} onChange={(v) => updateSection('hero', { badge: v })} />
            <div className="grid sm:grid-cols-3 gap-4">
              <Input label="Title line 1" value={content.hero.title1} onChange={(v) => updateSection('hero', { title1: v })} />
              <Input label="Title line 2 (accent)" value={content.hero.title2} onChange={(v) => updateSection('hero', { title2: v })} />
              <Input label="Title line 3" value={content.hero.title3} onChange={(v) => updateSection('hero', { title3: v })} />
            </div>
            <Input label="Subtitle" value={content.hero.subtitle} onChange={(v) => updateSection('hero', { subtitle: v })} rows={2} />
            <div className="grid sm:grid-cols-3 gap-4">
              <Input label="Stat 1 value" value={content.hero.stat1Value} onChange={(v) => updateSection('hero', { stat1Value: v })} />
              <Input label="Stat 1 label" value={content.hero.stat1Label} onChange={(v) => updateSection('hero', { stat1Label: v })} />
              <div />
              <Input label="Stat 2 value" value={content.hero.stat2Value} onChange={(v) => updateSection('hero', { stat2Value: v })} />
              <Input label="Stat 2 label" value={content.hero.stat2Label} onChange={(v) => updateSection('hero', { stat2Label: v })} />
              <div />
              <Input label="Stat 3 value" value={content.hero.stat3Value} onChange={(v) => updateSection('hero', { stat3Value: v })} />
              <Input label="Stat 3 label" value={content.hero.stat3Label} onChange={(v) => updateSection('hero', { stat3Label: v })} />
            </div>
            <Input label="Main image URL" value={content.hero.mainImageUrl} onChange={(v) => updateSection('hero', { mainImageUrl: v })} />
            <Input label="Main image title" value={content.hero.mainImageTitle} onChange={(v) => updateSection('hero', { mainImageTitle: v })} />
            <Input label="Main image caption" value={content.hero.mainImageCaption} onChange={(v) => updateSection('hero', { mainImageCaption: v })} />
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Right card 1 value" value={content.hero.rightCard1Value} onChange={(v) => updateSection('hero', { rightCard1Value: v })} />
              <Input label="Right card 1 label" value={content.hero.rightCard1Label} onChange={(v) => updateSection('hero', { rightCard1Label: v })} />
              <Input label="Right card 2 value" value={content.hero.rightCard2Value} onChange={(v) => updateSection('hero', { rightCard2Value: v })} />
              <Input label="Right card 2 label" value={content.hero.rightCard2Label} onChange={(v) => updateSection('hero', { rightCard2Label: v })} />
            </div>
            <Input label="Our Story button text" value={content.hero.ourStoryButtonText} onChange={(v) => updateSection('hero', { ourStoryButtonText: v })} />
            <Input label="Background image URL" value={content.hero.backgroundImageUrl} onChange={(v) => updateSection('hero', { backgroundImageUrl: v })} />
            <button type="button" onClick={() => { resetSection('hero'); showSaved(); }} className="text-sm text-neutral-500 hover:text-accent-orange">Reset Hero to default</button>
          </div>
        </SectionCard>

        {/* Impact */}
        <SectionCard title="Impact" icon={Megaphone}>
          <div className="grid gap-4 pt-4">
            <Input label="Badge" value={content.impact.badge} onChange={(v) => updateSection('impact', { badge: v })} />
            <Input label="Heading" value={content.impact.heading} onChange={(v) => updateSection('impact', { heading: v })} />
            <Input label="Subtext" value={content.impact.subtext} onChange={(v) => updateSection('impact', { subtext: v })} rows={2} />
            <Input label="Footer badge" value={content.impact.footerBadge} onChange={(v) => updateSection('impact', { footerBadge: v })} />
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">Stats (4 cards)</p>
            {content.impact.stats.map((stat, i) => (
              <div key={i} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                <Input label="Value" value={stat.value} onChange={(v) => updateSection('impact', (s) => ({ ...s, stats: s.stats.map((x, j) => j === i ? { ...x, value: v } : x) }))} />
                <Input label="Label" value={stat.label} onChange={(v) => updateSection('impact', (s) => ({ ...s, stats: s.stats.map((x, j) => j === i ? { ...x, label: v } : x) }))} />
                <Input label="Description" value={stat.description} onChange={(v) => updateSection('impact', (s) => ({ ...s, stats: s.stats.map((x, j) => j === i ? { ...x, description: v } : x) }))} />
                <Input label="Gradient (e.g. from-blue-500 to-cyan-500)" value={stat.gradient} onChange={(v) => updateSection('impact', (s) => ({ ...s, stats: s.stats.map((x, j) => j === i ? { ...x, gradient: v } : x) }))} />
              </div>
            ))}
            <button type="button" onClick={() => { resetSection('impact'); showSaved(); }} className="text-sm text-neutral-500 hover:text-accent-orange">Reset Impact to default</button>
          </div>
        </SectionCard>

        {/* About */}
        <SectionCard title="About Section" icon={Users}>
          <div className="grid gap-4 pt-4">
            <Input label="Badge" value={content.about.badge} onChange={(v) => updateSection('about', { badge: v })} />
            <Input label="Title" value={content.about.title} onChange={(v) => updateSection('about', { title: v })} />
            <Input label="Paragraph 1" value={content.about.paragraph1} onChange={(v) => updateSection('about', { paragraph1: v })} rows={3} />
            <Input label="Paragraph 2" value={content.about.paragraph2} onChange={(v) => updateSection('about', { paragraph2: v })} rows={2} />
            <Input label="Since badge (e.g. Since 2020)" value={content.about.sinceBadge} onChange={(v) => updateSection('about', { sinceBadge: v })} />
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Key points (one per line)</p>
            {content.about.keyPoints.map((point, i) => (
              <Input key={i} label={`Point ${i + 1}`} value={point} onChange={(v) => updateSection('about', (s) => ({ ...s, keyPoints: s.keyPoints.map((p, j) => j === i ? v : p) }))} />
            ))}
            <Input label="Button text" value={content.about.buttonText} onChange={(v) => updateSection('about', { buttonText: v })} />
            <Input label="Image URL" value={content.about.imageUrl} onChange={(v) => updateSection('about', { imageUrl: v })} />
            <button type="button" onClick={() => { resetSection('about'); showSaved(); }} className="text-sm text-neutral-500 hover:text-accent-orange">Reset About to default</button>
          </div>
        </SectionCard>

        {/* Highlight Programs */}
        <SectionCard title="Highlight Programs" icon={Briefcase}>
          <div className="grid gap-4 pt-4">
            <Input label="Badge" value={content.highlightPrograms.badge} onChange={(v) => updateSection('highlightPrograms', { badge: v })} />
            <Input label="Title" value={content.highlightPrograms.title} onChange={(v) => updateSection('highlightPrograms', { title: v })} />
            <Input label="Subtitle" value={content.highlightPrograms.subtitle} onChange={(v) => updateSection('highlightPrograms', { subtitle: v })} rows={2} />
            <Input label="Button text" value={content.highlightPrograms.buttonText} onChange={(v) => updateSection('highlightPrograms', { buttonText: v })} />
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Program cards are managed under Admin → Programs.</p>
            <button type="button" onClick={() => { resetSection('highlightPrograms'); showSaved(); }} className="text-sm text-neutral-500 hover:text-accent-orange">Reset to default</button>
          </div>
        </SectionCard>

        {/* Gallery Preview */}
        <SectionCard title="Gallery Preview" icon={ImageIcon}>
          <div className="grid gap-4 pt-4">
            <Input label="Badge" value={content.galleryPreview.badge} onChange={(v) => updateSection('galleryPreview', { badge: v })} />
            <Input label="Title" value={content.galleryPreview.title} onChange={(v) => updateSection('galleryPreview', { title: v })} />
            <Input label="Subtitle" value={content.galleryPreview.subtitle} onChange={(v) => updateSection('galleryPreview', { subtitle: v })} rows={2} />
            <Input label="Button text" value={content.galleryPreview.buttonText} onChange={(v) => updateSection('galleryPreview', { buttonText: v })} />
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Gallery items are managed under Admin → Gallery.</p>
            <button type="button" onClick={() => { resetSection('galleryPreview'); showSaved(); }} className="text-sm text-neutral-500 hover:text-accent-orange">Reset to default</button>
          </div>
        </SectionCard>

        {/* Testimonials */}
        <SectionCard title="Testimonials" icon={MessageSquare}>
          <div className="grid gap-4 pt-4">
            <Input label="Badge" value={content.testimonials.badge} onChange={(v) => updateSection('testimonials', { badge: v })} />
            <Input label="Title" value={content.testimonials.title} onChange={(v) => updateSection('testimonials', { title: v })} />
            <Input label="Subtitle" value={content.testimonials.subtitle} onChange={(v) => updateSection('testimonials', { subtitle: v })} rows={2} />
            {content.testimonials.items.map((t, i) => (
              <div key={t.id} className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 space-y-3">
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Testimonial {i + 1}</p>
                <Input label="Name" value={t.name} onChange={(v) => updateSection('testimonials', (s) => ({ ...s, items: s.items.map((x, j) => j === i ? { ...x, name: v } : x) }))} />
                <Input label="Role" value={t.role} onChange={(v) => updateSection('testimonials', (s) => ({ ...s, items: s.items.map((x, j) => j === i ? { ...x, role: v } : x) }))} />
                <Input label="Location" value={t.location} onChange={(v) => updateSection('testimonials', (s) => ({ ...s, items: s.items.map((x, j) => j === i ? { ...x, location: v } : x) }))} />
                <Input label="Content" value={t.content} onChange={(v) => updateSection('testimonials', (s) => ({ ...s, items: s.items.map((x, j) => j === i ? { ...x, content: v } : x) }))} rows={3} />
                <Input label="Rating (1-5)" type="number" value={String(t.rating)} onChange={(v) => updateSection('testimonials', (s) => ({ ...s, items: s.items.map((x, j) => j === i ? { ...x, rating: Math.min(5, Math.max(1, parseInt(v, 10) || 1)) } : x) }))} />
              </div>
            ))}
            <button type="button" onClick={() => { resetSection('testimonials'); showSaved(); }} className="text-sm text-neutral-500 hover:text-accent-orange">Reset Testimonials to default</button>
          </div>
        </SectionCard>

        {/* Partners */}
        <SectionCard title="Partners" icon={Handshake}>
          <div className="grid gap-4 pt-4">
            <Input label="Badge" value={content.partners.badge} onChange={(v) => updateSection('partners', { badge: v })} />
            <Input label="Title" value={content.partners.title} onChange={(v) => updateSection('partners', { title: v })} />
            <Input label="Subtitle" value={content.partners.subtitle} onChange={(v) => updateSection('partners', { subtitle: v })} rows={2} />
            <Input label="Empty state message" value={content.partners.emptyMessage} onChange={(v) => updateSection('partners', { emptyMessage: v })} />
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Partner entries (name + logo URL)</p>
            {content.partners.items.length === 0 ? (
              <p className="text-sm text-neutral-500">No partners yet. Add one below.</p>
            ) : (
              content.partners.items.map((p, i) => (
                <div key={i} className="grid sm:grid-cols-2 gap-4 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                  <Input label="Partner name" value={p.name} onChange={(v) => updateSection('partners', (s) => ({ ...s, items: s.items.map((x, j) => j === i ? { ...x, name: v } : x) }))} />
                  <Input label="Logo URL" value={p.logo || ''} onChange={(v) => updateSection('partners', (s) => ({ ...s, items: s.items.map((x, j) => j === i ? { ...x, logo: v } : x) }))} />
                  <button type="button" onClick={() => updateSection('partners', (s) => ({ ...s, items: s.items.filter((_, j) => j !== i) }))} className="text-sm text-red-600 dark:text-red-400">Remove</button>
                </div>
              ))
            )}
            <button
              type="button"
              onClick={() => updateSection('partners', (s) => ({ ...s, items: [...s.items, { name: '', logo: '' }] }))}
              className="text-sm font-medium text-accent-orange hover:underline"
            >
              + Add partner
            </button>
            <button type="button" onClick={() => { resetSection('partners'); showSaved(); }} className="text-sm text-neutral-500 hover:text-accent-orange">Reset Partners to default</button>
          </div>
        </SectionCard>

        {/* Call to Action */}
        <SectionCard title="Call to Action" icon={Heart}>
          <div className="grid gap-4 pt-4">
            <Input label="Title" value={content.callToAction.title} onChange={(v) => updateSection('callToAction', { title: v })} />
            <Input label="Subtitle" value={content.callToAction.subtitle} onChange={(v) => updateSection('callToAction', { subtitle: v })} rows={2} />
            <Input label="Button text on cards" value={content.callToAction.getStartedButtonText} onChange={(v) => updateSection('callToAction', { getStartedButtonText: v })} />
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Action cards</p>
            {content.callToAction.actions.map((action, i) => (
              <div key={i} className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 space-y-3">
                <Input label="Title" value={action.title} onChange={(v) => updateSection('callToAction', (s) => ({ ...s, actions: s.actions.map((x, j) => j === i ? { ...x, title: v } : x) }))} />
                <Input label="Description" value={action.description} onChange={(v) => updateSection('callToAction', (s) => ({ ...s, actions: s.actions.map((x, j) => j === i ? { ...x, description: v } : x) }))} rows={2} />
                <Input label="Link" value={action.link} onChange={(v) => updateSection('callToAction', (s) => ({ ...s, actions: s.actions.map((x, j) => j === i ? { ...x, link: v } : x) }))} />
                <Input label="Color (e.g. from-accent-orange to-orange-600)" value={action.color} onChange={(v) => updateSection('callToAction', (s) => ({ ...s, actions: s.actions.map((x, j) => j === i ? { ...x, color: v } : x) }))} />
              </div>
            ))}
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Trust badges (comma or one per line)</p>
            <Input
              label="Trust badges"
              value={content.callToAction.trustBadges.join('\n')}
              onChange={(v) => updateSection('callToAction', { trustBadges: v.split(/[\n,]/).map((s) => s.trim()).filter(Boolean) })}
              rows={3}
            />
            <button type="button" onClick={() => { resetSection('callToAction'); showSaved(); }} className="text-sm text-neutral-500 hover:text-accent-orange">Reset CTA to default</button>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}

export default AdminHomeContent
