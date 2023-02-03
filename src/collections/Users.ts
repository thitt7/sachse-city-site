import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
			name: 'name',
			type: 'text',
			required: true,
		},
    {
			name: 'role',
			type: 'radio',
			required: true,
      options: [
        {
          label: 'Developer',
          value: 'developer'
        }, 
        {
          label: 'Writer', 
          value: 'writer'
        }, 
        {
          label: 'Designer', 
          value: 'designer'
        }
      ]
		}
  ],
};

export default Users;