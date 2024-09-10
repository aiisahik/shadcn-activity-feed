'use client';

import {
  MessageSquareX,
  MessageCircleWarning,
  MessageCircleQuestion,
  MessageCircle,
  MailWarning,
  MailCheck,
  ThumbsUp,
  GitCommit,
  GitPullRequest,
  Snowflake
} from 'lucide-react';

type ActivityType =
  | 'message'
  | 'reaction'
  | 'commit'
  | 'pullRequest'
  | 'freeze'
  | 'denied'
  | 'certifiedMail'
  | 'warningMail'
  | 'warningMessage'
  | 'questionMessage'
  | 'comment';

export interface ActivityItem {
  timestamp: string;
  type: ActivityType;
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  description: string;
  channel?: string;
  content?: string;
}

const getIconForType = (type: ActivityType) => {
  switch (type) {
    case 'message':
      return <MessageCircle color="white" className="h-5 w-5" />;
    case 'reaction':
      return <ThumbsUp color="white" className="h-5 w-5" />;
    case 'commit':
      return <GitCommit color="white" className="h-5 w-5" />;
    case 'pullRequest':
      return <GitPullRequest color="white" className="h-5 w-5" />;
    case 'comment':
      return <MessageCircle color="white" className="h-5 w-5" />;
    case 'freeze':
      return <Snowflake color="white" className="h-5 w-5" />;
    case 'denied':
      return <MessageSquareX color="white" className="h-5 w-5" />;
    case 'certifiedMail':
      return <MailCheck color="white" className="h-5 w-5" />;
    case 'warningMail':
      return <MailWarning color="white" className="h-5 w-5" />;
    case 'warningMessage':
      return <MessageCircleWarning color="white" className="h-5 w-5" />;
    case 'questionMessage':
      return <MessageCircleQuestion color="white" className="h-5 w-5" />;
  }
};


const demoActivityData: ActivityItem[] = [
  {
    timestamp: '2024-05-01',
    type: 'message',
    user: { name: 'Anelli', initials: 'CH' },
    description: 'sent initial notice of assignment to payor via email',
    content:
      'Excepteur velit voluptate excepteur occaecat sint occaecat ex ipsum officia eiusmod fugiat. Labore proident eiusmod ut fugiat. Sit exercitation cillum quis dolore nulla laborum esse ea ad ipsum sunt occaecat ut.'
  },
  {
    timestamp: '2024-05-01',
    type: 'certifiedMail',
    user: { name: 'Anelli', initials: 'CH' },
    description:
      'sent initial notice of assignment to payor via certified mail',
    content:
      'Excepteur velit voluptate excepteur occaecat sint occaecat ex ipsum officia eiusmod fugiat. Labore proident eiusmod ut fugiat. Sit exercitation cillum quis dolore nulla laborum esse ea ad ipsum sunt occaecat ut.'
  },
  {
    timestamp: '2024-05-03',
    type: 'reaction',
    user: { name: 'Shopify', initials: 'JP' },
    description: 'acknowledged receipt of the notice of assignment'
  },
  {
    timestamp: '2024-08-07',
    type: 'warningMessage',
    user: { name: 'Anelli', initials: 'JP' },
    description: 'requested freeze of all borrower accounts via email to payor'
  },
  {
    timestamp: '2024-08-07',
    type: 'warningMail',
    user: { name: 'Anelli', initials: 'JP' },
    description:
      'requested freeze of all borrower accounts via certified mail to payor'
  },
  {
    timestamp: '2024-08-15',
    type: 'reaction',
    user: { name: 'Shopify', initials: 'JP' },
    description: 'acknowledged receipt of the request to freeze accounts'
  },
  {
    timestamp: '2024-08-19',
    type: 'questionMessage',
    user: { name: 'Anelli', initials: 'JP' },
    description: 'requested an update on the status of the freeze',
    content:
      'Duis nisi pariatur excepteur aliqua ipsum eu ut voluptate ullamco sit do cillum labore voluptate ea.'
  },
  {
    timestamp: '2024-08-25',
    type: 'freeze',
    user: { name: 'Shopify', initials: 'JP' },
    description:
      'verified that $23,045.00 was frozen as of 2024-08-21 on all borrower accounts'
  },
  {
    timestamp: '2024-09-02',
    type: 'questionMessage',
    user: { name: 'Anelli', initials: 'JP' },
    description: 'requested an update on the status of the freeze'
  },
  {
    timestamp: '2024-09-08',
    type: 'freeze',
    user: { name: 'Shopify', initials: 'JP' },
    description:
      'verified that $41,621.00 was frozen as of 2024-09-01 on all borrower accounts'
  }
];

export default function ActivityFeed({
  activityData = demoActivityData
}: {
  activityData?: ActivityItem[];
}) {
  return (
    <div className="relative pt-8">
      {activityData.map((item, index) => (
        <div key={index} className="mb-12 flex items-stretch h-full">
          <div className="flex-shrink-0 w-32 text-sm text-gray-400 font-semibold text-right pr-4">
            {index > 0 && activityData[index - 1].timestamp === item.timestamp
              ? ''
              : item.timestamp}
          </div>
          <div className="relative">
            <div
              className="absolute min-h-3 left-5 -top-5 -bottom-8 w-0.5 bg-gray-300 -z-10"
              aria-hidden="true"
            />
            <div className="bg-gray-300 rounded-full p-3 -mt-3">
              {getIconForType(item.type)}
            </div>
          </div>
          <div className="ml-4 flex-grow">
            <p className="text-sm">
              <span className="font-semibold">{item.user.name}</span>{' '}
              <span className="text-gray-500">{item.description}</span>
            </p>
            {item.content && (
              <div className="mt-2 pl-4 text-sm text-gray-700">
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
