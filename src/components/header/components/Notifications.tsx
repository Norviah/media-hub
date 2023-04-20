import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { toString } from '@/util/time';
import { faker } from '@faker-js/faker';
import { noCase } from 'change-case';
import { set, sub } from 'date-fns';
import { useState } from 'react';

const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatar: null,
    type: 'order_placed',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.fullName(),
    description: 'answered to your comment on the Minimal',
    avatar: '/assets/images/avatars/avatar_2.jpg',
    type: 'friend_interactive',
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: 'You have new message',
    description: '5 unread messages',
    avatar: null,
    type: 'chat_message',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatar: null,
    type: 'mail',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatar: null,
    type: 'order_shipped',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];

export default function Notifications(): JSX.Element {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          color: anchor ? 'primary.main' : 'default',
          transition: 'color .2s ease-in-out',
        }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 330,
            maxHeight: 450,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* TOP BAR */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: 2,
            px: 2.5,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <DoneAllIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        <Divider />

        {/* Notifications */}
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          <List
            disablePadding
            subheader={
              <ListSubheader
                sx={{
                  py: 1,
                  px: 2.5,
                  typography: 'overline',
                }}
              >
                New
              </ListSubheader>
            }
          >
            {notifications.slice(0, 2).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
          <List
            subheader={
              <ListSubheader
                sx={{
                  py: 1,
                  px: 2.5,
                  typography: 'overline',
                }}
              >
                Old
              </ListSubheader>
            }
          >
            {[...notifications.slice(2, 5), ...notifications.slice(2, 5)].map((notification, i) => (
              <NotificationItem key={`${notification.id}-${i}`} notification={notification} />
            ))}
          </List>
        </Box>

        <Divider />

        {/* BOTTOM BAR */}
        <Box sx={{ p: 1 }}>
          <Button fullWidth>View All</Button>
        </Box>
      </Popover>
    </>
  );
}

function NotificationItem(props: { notification: any }) {
  const { avatar, title } = renderContent(props);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(props.notification.isUnRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <AccessTimeIcon sx={{ mr: 0.5, width: 16, height: 16 }} />
            {toString(props.notification.createdAt)}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

function renderContent(props: { notification: any }) {
  const title = (
    <Typography variant="subtitle2">
      {props.notification.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {noCase(props.notification.description)}
      </Typography>
    </Typography>
  );

  if (props.notification.type === 'order_placed') {
    return {
      avatar: (
        <img alt={props.notification.title} src="/assets/icons/ic_notification_package.svg" />
      ),
      title,
    };
  }
  if (props.notification.type === 'order_shipped') {
    return {
      avatar: (
        <img alt={props.notification.title} src="/assets/icons/ic_notification_shipping.svg" />
      ),
      title,
    };
  }
  if (props.notification.type === 'mail') {
    return {
      avatar: <img alt={props.notification.title} src="/assets/icons/ic_notification_mail.svg" />,
      title,
    };
  }
  if (props.notification.type === 'chat_message') {
    return {
      avatar: <img alt={props.notification.title} src="/assets/icons/ic_notification_chat.svg" />,
      title,
    };
  }
  return {
    avatar: props.notification.avatar ? (
      <img alt={props.notification.title} src={props.notification.avatar} />
    ) : null,
    title,
  };
}
