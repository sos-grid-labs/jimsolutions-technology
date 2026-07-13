import SpecStrip, { SpecItem } from '../ui/SpecStrip';
import { faAward, faBriefcase, faMap, faHeadset, faBolt } from '@fortawesome/free-solid-svg-icons';

/**
 * Statistics — now delegates to the shared SpecStrip component.
 * This component is kept as a named export so page imports don't break.
 * The SpecStrip inside Hero also renders these stats; if used standalone
 * on inner pages, this provides the same meter-readout block.
 */
const stats: SpecItem[] = [
  { value: '5+',       label: 'Years of Experience',  icon: faAward     },
  { value: '500+',     label: 'Projects Completed',   icon: faBriefcase },
  { value: '36',       label: 'States Reached',       icon: faMap       },
  { value: '8am–10pm', label: 'Daily Live Support',   icon: faHeadset   },
  { value: '<2 hrs',   label: 'Avg. Response Time',   icon: faBolt      },
];

export default function Statistics() {
  return (
    <section className="w-full" aria-label="Company statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SpecStrip items={stats} theme="light" />
      </div>
    </section>
  );
}
