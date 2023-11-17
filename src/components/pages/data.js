
  export const DataPro = [
         {
          columns: [{
                id: '1',
                name:'В очереди',
                color: '#ff817c',
                status: 'to_do',
                taskIds: ['1002', '1001'],
            },{
                id: '2',
                name:'В работе',
                color: '#365EFD',
                status: 'in_progress',
                taskIds: ['1003'],
            },{
                id: '3',
                name:'На проверку',
                color: '#FEBD38',
                status: 'need_review',
                taskIds: ['1004'],
            },{
                id: '4',
                name:'Выполнено',
                color: '#13BE9E',
                status: 'done',
                taskIds:['1005', '1006'],
            },],
          nameProject: "Project#1",
          idProject: '28072301',
          users:[
            1001, 1002, 1003,1004,1005,1006
        ],
          cards:[{
                id: '1001',
                Label: "Label#1",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                members: [1001,1003],
                comments: "4",
                views: "6",
                files: "0",
                tag:  '1',
                date: new Date(2022,4,25,11,35,22),
                status: "to_do",
                id_column:'1',
                subTasks:{
                    done: false,
                    arrayTasks:[
                        {
                            name:"подзадача№1",
                            done: false,
                        },
                        {name:"подзадача№2",
                        done: true,},
                        {name:"подзадача№3",
                        done: false,},
                    ]
                }
            },
            {
                id: '1002',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                Label: "Label#2",
                members: [1002,1004,1001, 1003,1005,1006],
                comments: "1",
                views: "8",
                files: "1",
                tag:  '2',
                date: new Date(2022,4,25,11,35,22),
                status: "to_do",
                id_column:'1',
                subTasks:{
                    done: false,
                    arrayTasks:[]
                },
            },
            {
                id: '1003',
                Label: "Label#3",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                members: [1006,1005,1002,1003],
                comments: "2",
                views: "10",
                files: "3",
                tag:  '3',
                date: new Date(2022,4,25,11,35,22),
                status: "in_progress",
                id_column:'2',
                subTasks:{
                    done: false,
                    arrayTasks:[]
                },
            },
            {
                id: '1004',
                Label: "Label#4",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                members: [1001,1002],
                comments: "1",
                views: "7",
                files: "0",
                tag:  '1',
                date: new Date(2022,4,25,11,35,22),
                status: "need_review",
                id_column:'3',
                subTasks:{
                    done: false,
                    arrayTasks:[]
                },
            },
            {
                id: '1005',
                Label: "Label#5",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                members: [1003,1004,1005,1006],
                comments: "9",
                views: "15",
                files: "5",
                tag:  '2',
                date: new Date(2022,4,25,11,35,22),
                status: "done",
                id_column:'4',
                subTasks:{
                    done: true,
                    arrayTasks:[
                        {
                            name:"подзадача№1",
                            done: true,
                        },
                        {name:"подзадача№2",
                        done: true,},
                        {name:"подзадача№3",
                        done: true,},
                        {
                            name:"подзадача№4",
                            done: true,
                        },
                        {name:"подзадача№5",
                        done: true,},
                        {name:"подзадача№6",
                        done: true,},
                    ]
                }
            },
            {
                id: '1006',
                Label: "Label#6",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                members: [1004,1003,1006,1001,1002],
                comments: "4",
                views: "87",
                files: "9",
                tag:  '3',
                date: new Date(2022,4,25,11,35,22),
                status: "done",
                id_column:'4',
                subTasks:{
                    done: false,
                    arrayTasks:[]
                },
            },
            
          ],},
          {
            columns: [{
                  id: '1',
                  name:'В очереди',
                  color: '#ff817c',
                  status: 'to_do',
                  taskIds: ['1002', '1001', '1003'],
              },{
                  id: '2',
                  name:'В работе',
                  color: '#365EFD',
                  status: 'in_progress',
                  taskIds: [],
              },{
                  id: '3',
                  name:'На проверку',
                  color: '#FEBD38',
                  status: 'need_review',
                  taskIds: ['1004','1005'],
              },{
                  id: '4',
                  name:'Выполнено',
                  color: '#13BE9E',
                  status: 'done',
                  taskIds:['1006'],
              },],
            nameProject: "Project#2",
            idProject: '28072302',
            users:[
              1001, 1002, 1003,1004
          ],
            cards:[{
                  id: '1001',
                  Label: "Label#1",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  members: [1001,1003,1004],
                  comments: "4",
                  views: "6",
                  files: "0",
                  tag: '1',
                  date: new Date(2022,4,25,11,35,22),
                  status: "to_do",
                  id_column:'1',
                  subTasks:{
                      done: false,
                      arrayTasks:[
                          {
                              name:"подзадача№1",
                              done: false,
                          },
                          {name:"подзадача№2",
                          done: true,},
                          {name:"подзадача№3",
                          done: false,},
                      ]
                  }
              },
              {
                  id: '1002',
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  Label: "Label#2",
                  members: [1002,1004,1001, 1003],
                  comments: "1",
                  views: "8",
                  files: "1",
                  tag:  '1',
                  date: new Date(2022,4,25,11,35,22),
                  status: "to_do",
                  id_column:'1',
                  subTasks:{
                      done: false,
                      arrayTasks:[{
                        name:"подзадача№1",
                        done: false,
                    },
                    {name:"подзадача№2",
                    done: true,},
                    {name:"подзадача№3",
                    done: false,},{
                        name:"подзадача№4",
                        done: false,
                    },
                    {name:"подзадача№5",
                    done: true,}]
                  },
              },
              {
                  id: '1003',
                  Label: "Label#3",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  members: [1001,1004,1002,1003],
                  comments: "2",
                  views: "10",
                  files: "3",
                  tag:  '2',
                  date: new Date(2022,4,25,11,35,22),
                  status: "in_progress",
                  id_column:'1',
                  subTasks:{
                      done: false,
                      arrayTasks:[]
                  },
              },
              {
                  id: '1004',
                  Label: "Label#4",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  members: [1001,1002],
                  comments: "1",
                  views: "7",
                  files: "0",
                  tag:  '3',
                  date: new Date(2022,4,25,11,35,22),
                  status: "need_review",
                  id_column:'3',
                  subTasks:{
                      done: false,
                      arrayTasks:[]
                  },
              },
              {
                  id: '1005',
                  Label: "Label#5",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  members: [1003,1004,1001,1002],
                  comments: "9",
                  views: "15",
                  files: "5",
                  tag:  '2',
                  date: new Date(2022,4,25,11,35,22),
                  status: "done",
                  id_column:'3',
                  subTasks:{
                      done: false,
                      arrayTasks:[
                          {
                              name:"подзадача№1",
                              done: true,
                          },
                          {name:"подзадача№2",
                          done: true,},
                          {name:"подзадача№3",
                          done: true,},
                      ]
                  }
              },
              {
                  id: '1006',
                  Label: "Label#6",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  members: [1001],
                  comments: "4",
                  views: "87",
                  files: "9",
                  tag:  '1',
                  date: new Date(2022,4,25,11,35,22),
                  status: "done",
                  id_column:'4',
                  subTasks:{
                      done: true,
                      arrayTasks:[{
                        name:"подзадача№1",
                        done: true,
                    },
                    {name:"подзадача№2",
                    done: true,},
                    {name:"подзадача№3",
                    done: true,},]
                  },
              },
              
            ],},
            {
                columns: [{
                      id: '1',
                      name:'В очереди',
                      color: '#ff817c',
                      status: 'to_do',
                      taskIds: ['1002', '1001', '1003'],
                  },{
                      id: '2',
                      name:'В работе',
                      color: '#365EFD',
                      status: 'in_progress',
                      taskIds: [],
                  },{
                      id: '3',
                      name:'На проверку',
                      color: '#FEBD38',
                      status: 'need_review',
                      taskIds: ['1004','1005'],
                  },{
                      id: '4',
                      name:'Выполнено',
                      color: '#13BE9E',
                      status: 'done',
                      taskIds:['1006'],
                  },],
                nameProject: "Project#3",
                idProject: '2807230',
                users:[
                  1001, 1002, 1003,1004
              ],
                cards:[{
                      id: '1001',
                      Label: "Label#1",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      members: [1001,1003,1004],
                      comments: "4",
                      views: "6",
                      files: "0",
                      tag:  '2',
                      date: new Date(2022,4,25,11,35,22),
                      status: "to_do",
                      id_column:'1',
                      subTasks:{
                          done: false,
                          arrayTasks:[
                              {
                                  name:"подзадача№1",
                                  done: false,
                              },
                              {name:"подзадача№2",
                              done: true,},
                              {name:"подзадача№3",
                              done: false,},
                          ]
                      }
                  },
                  {
                      id: '1002',
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      Label: "Label#2",
                      members: [1002,1004,1001, 1003],
                      comments: "1",
                      views: "8",
                      files: "1",
                      tag:  '1',
                      date: new Date(2022,4,25,11,35,22),
                      status: "to_do",
                      id_column:'1',
                      subTasks:{
                          done: false,
                          arrayTasks:[{
                            name:"подзадача№1",
                            done: false,
                        },
                        {name:"подзадача№2",
                        done: true,},
                        {name:"подзадача№3",
                        done: false,},{
                            name:"подзадача№4",
                            done: false,
                        },
                        {name:"подзадача№5",
                        done: true,}]
                      },
                  },
                  {
                      id: '1003',
                      Label: "Label#3",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      members: [1001,1004,1002,1003],
                      comments: "2",
                      views: "10",
                      files: "3",
                      tag:  '3',
                      date: new Date(2022,4,25,11,35,22),
                      status: "in_progress",
                      id_column:'1',
                      subTasks:{
                          done: false,
                          arrayTasks:[]
                      },
                  },
                  {
                      id: '1004',
                      Label: "Label#4",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      members: [1001,1002],
                      comments: "1",
                      views: "7",
                      files: "0",
                      tag:  '2',
                      date: new Date(2022,4,25,11,35,22),
                      status: "need_review",
                      id_column:'3',
                      subTasks:{
                          done: false,
                          arrayTasks:[]
                      },
                  },
                  {
                      id: '1005',
                      Label: "Label#5",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      members: [1003,1004,1001,1002],
                      comments: "9",
                      views: "15",
                      files: "5",
                      tag:  '1',
                      date: new Date(2022,4,25,11,35,22),
                      status: "done",
                      id_column:'3',
                      subTasks:{
                          done: false,
                          arrayTasks:[
                              {
                                  name:"подзадача№1",
                                  done: true,
                              },
                              {name:"подзадача№2",
                              done: true,},
                              {name:"подзадача№3",
                              done: true,},
                          ]
                      }
                  },
                  {
                      id: '1006',
                      Label: "Label#6",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      members: [1001],
                      comments: "4",
                      views: "87",
                      files: "9",
                      tag:  '2',
                      date: new Date(2022,4,25,11,35,22),
                      status: "done",
                      id_column:'4',
                      subTasks:{
                          done: true,
                          arrayTasks:[{
                            name:"подзадача№1",
                            done: true,
                        },
                        {name:"подзадача№2",
                        done: true,},
                        {name:"подзадача№3",
                        done: true,},]
                      },
                  },
                  
                ],},
  
    ];




