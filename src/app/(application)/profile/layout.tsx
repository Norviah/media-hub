import { ProfileSidebar } from '@/systems/profile/components/ProfileSidebar';
import { LayoutProps } from '@/types/components/LayoutProps';

export default function ProfileLayout(props: LayoutProps): JSX.Element {
  return (
    <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex">
        <ProfileSidebar />
      </aside>
      <main>{props.children}</main>
    </div>
  );
}
