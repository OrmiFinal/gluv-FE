import { useQuery ,useMutation} from '@tanstack/react-query';
import axios from 'axios';

/**
 * GPT 채팅 기능을 처리하는 커스텀 훅입니다.
 * 데이터 가져오기 및 관리를 위해 react-query를 사용합니다.
 * 60초마다 재검색 간격 설정 (60 * 1000 밀리초)
 * @returns {Object} Data 값이나 mtate 함수
 */
export default function useGptChat({id}) {
  
  
  /**
   * 대화한 목록을 가져옵니다.
   * http://localhost:8003/chat/?cache_key=a 와 같이 title 파람이 필요합니다
   * @returns {Promise} 가져온 데이터로 해결되는 프로미스입니다.
   * @throws {Error} 요청이 실패하거나 응답 상태가 200이 아닌 경우 발생합니다.
   */
  const GetGptChat = async () => {
    try {
      const response = await axios.get(`http://localhost:8003/chat/?cache_key=${id}`);

      if (response.status !== 200) {
        throw new Error('제품을 가져오는 데 실패했습니다');
      }

      const data = response.data;
      

      return data;
    } catch (error) {
      console.error('제품을 가져오는 중 오류 발생:', error);
      throw error;
    }
  };




  



  /**
   * 서버에 제품을 전송합니다.
   * 
   * @param {Object} params - 포스트 요청의 url입니다.
   * @param {string} params.id - 포스트 요청의 ID입니다.
   * @param {string} params.Prompt - 포스트 요청의 프롬프트입니다.
   * @param {string} params.Response - 포스트 요청의 응답입니다.
   * 
   * @returns {Promise} 포스트 요청의 데이터로 해결되는 프로미스입니다.
   * @throws {Error} 포스트 요청이 실패한 경우 발생합니다.
   */
  const PostGptChat = async ({  Prompt }) => {
    try {
      const response = await axios.post(`http://localhost:8003/chat/`, {
        'prompt': Prompt,
        'title': id,
      });
  
 

      const data = response.data;

      return data;
    } catch (error) {
      if (error.response) {
        // 서버가 응답을 반환한 경우
        console.error('Server responded with:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else {
        // 서버에 요청을 보내기 전에 오류가 발생한 경우
        console.error('Error message:', error.message);
      }
      


      console.error('제품 전송 중 오류 발생:', error);
      throw error;
    }
  };

  const { mutate: mutatePostGptChat } = useMutation({
    mutationFn: PostGptChat,
    onSuccess: async () => {
      console.log("Message posted successfully");
      // Optionally, wait for some time if needed
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second example, adjust as needed
      refetch();
    },
  });

 

 


  const  { data: gptChatData, error: gptChatError, refetch } = useQuery({
    queryKey: ['GptChatData'],
    queryFn: GetGptChat,
    refetchInterval: false, // Disable automatic refetching
  });


  return {  gptChatData ,mutatePostGptChat};
}
