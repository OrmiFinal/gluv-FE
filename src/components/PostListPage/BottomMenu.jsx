import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import SelectButton from '../ui/SelectButton';
import { FetchAllContext } from '../../api/post';

function BottomMenu() {
  const [expandedBoards, setExpandedBoards] = useState([]);

  const boards = [
    { id: 1, name: '공지사항', link: '/posts/notices/' },
    { id: 2, name: '질문 게시판', link: '/posts/?category=qna/' },
    { id: 3, name: '자유게시판', subBoards: [ 
      { name : '시', link : '/posts/?category=comm-poem/'}, 
      { name : '소설', link : '/posts/?category=comm-novel/'}, 
      { name : '수필', link : '/posts/?category=comm-essay/'}]
    },
    { id: 4, name: '창작게시판', subBoards: [ 
      { name : '시', link : '/posts/?category=creation-poem/'}, 
      { name : '소설', link : '/posts/?category=creation-novel/'}, 
      { name : '수필', link : '/posts/?category=creation-essay/'}]
    },
  ];

  const toggleSubBoards = (boardId) => {
    if (expandedBoards.includes(boardId)) {
      setExpandedBoards(expandedBoards.filter((id) => id !== boardId));
    } else {
      setExpandedBoards([...expandedBoards, boardId]);
    }
  };

  return (
    <div className="flex flex-col border m-2 p-2 rounded-md justify-items-center text-center">
      {boards.map((board) => (
        <div key={board.id} className="mb-2 p-2 border">
          {board.subBoards ? (
            <div
              className="cursor-pointer text-black hover:underline"
              onClick={() => toggleSubBoards(board.id)}
            >
              {board.name}
            </div>
          ) : (
            <Link to={board.link} className="text-black hover:underline">
              {board.name}
            </Link>
          )}
          <div className='p-2'>
            {board.subBoards && expandedBoards.includes(board.id) && (
              <div className="ml-4 flex-col justify-items-center text-center">
                {board.subBoards.map((item, index) => (
                  <div className='p-2'>
                    <Link
                      key={item.name}
                      to={item.link}
                      className="text-black hover:underline"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomMenu;
