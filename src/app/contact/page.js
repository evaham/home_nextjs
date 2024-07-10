'use client'

import Image from "next/image";
import { useState } from "react";
import next from "next";
import { Link } from "react-scroll";

const Contact = () => {
  const tabs = [
    { id: 1, name: '투게더포스 도입문의' },
    { id: 2, name: '서비스 제휴문의' },
    { id: 3, name: '투게더클럽(B2B) 입점문의' },
  ]

  // 탭 클릭시 컨텐츠변경
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  
  // 입력완료 버튼 스타일변경
  const [isOn, setIsOn] = useState(false);
  const handleButtonClick = () => {
    setIsOn(!isOn);
  };


    // 모달창
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  

  // 약관동의
  const [agreeAll, setAgreeAll] = useState(false);
  const [requiredAgreed, setRequiredAgreed] = useState(true);
  const [optionalAgreed, setOptionalAgreed] = useState(false);

  const handleAgreeAllChange = () => {
    const newAgreeAll = !agreeAll;
    setAgreeAll(newAgreeAll);
    setRequiredAgreed(newAgreeAll);
    setOptionalAgreed(newAgreeAll);
  };

  const handleRequiredChange = () => {
    const newRequiredAgreed = !requiredAgreed;
    setRequiredAgreed(newRequiredAgreed);
    setAgreeAll(newRequiredAgreed && optionalAgreed);
  };

  const handleOptionalChange = () => {
    const newOptionalAgreed = !optionalAgreed;
    setOptionalAgreed(newOptionalAgreed);
    setAgreeAll(newOptionalAgreed && requiredAgreed);
  };

  return (
    <main>
      <div class="w-[30rem] mx-auto pt-28 lg:w-[80rem]">
        <p class="text-4xl text-center font-bold tracking-tighter">제휴문의</p>
        <p class="my-5 text-lg text-center text-slate-600 tracking-tighter">투게더스에 궁금하신 점이 있거나 <br />제휴/입점 문의가 있으시면 언제든지 문의해주세요.</p>
      </div>
      <div className="w-[30rem] mx-auto flex flex-col py-14">
        <div className="flex-1 mb-5">
          <div className="bg-white rounded-lg my-4 p-6">
            <p className="flex items-center text-slate-400 tracking-tighter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-blue-500 mr-1">
                <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
              </svg>
              는 필수 기재 항목입니다.
            </p>
            <div className="flex flex-col my-4 ">
              <label className="flex items-center w-28 text-sm leading-6 text-slate-500 font-bold">문의내용
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-blue-500 ml-1">
                  <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                </svg>
              </label>
              <div className="flex flex-col mt-2">
                <select className="border p-2">
                  {tabs.map((tab) => (
                    <option className="p-2 rounded-full bg-slate-100" key={tab.id}>{tab.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className="flex items-center w-28 text-sm leading-6 text-slate-500 font-bold">업체명
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-blue-500 ml-1">
                  <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                </svg>
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input type="text" name="name" id="name" className="block w-full rounded-md border p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="업체명을 입력하세요"/>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className="flex items-center w-28 text-sm leading-6 text-slate-500 font-bold">문의자명
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-blue-500 ml-1">
                  <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                </svg>
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input type="text" name="name" id="name" className="block w-full rounded-md border  p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="문의자명을 입력하세요"/>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className="flex items-center w-28 text-sm leading-6 text-slate-500 font-bold">전화번호
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="items-center w-3 h-3 fill-blue-500 ml-1">
                  <path xmlns="http://www.w3.org/2000/svg" d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>                
                </svg>
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input type="text" name="name" id="name" className="block w-full rounded-md border  p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="전화번호를 입력하세요"/>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className="flex items-center w-28 text-sm leading-6 text-slate-500 font-bold">이메일</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input type="text" name="name" id="name" className="block w-full rounded-md border  p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="고객명을 입력하세요"/>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className="flex items-center w-28 text-sm leading-6 text-slate-500 font-bold">파일첨부</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input type="text" name="name" id="name" className="block w-full rounded-md border  p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder=""/>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className="flex items-center w-28 text-sm leading-6 text-slate-500 font-bold">문의내용</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <textarea type="text" name="name" id="name" className="block w-full rounded-md border  p-1.5 text-gray-900 outline-none  placeholder:text-gray-400 focus:border-blue-600" placeholder="문의내용을 입력하세요"/>
              </div>
            </div>

            <div className="mt-3">
              <p className="flex my-3 text-slate-600 items-center tracking-tighter">개인정보 수집 및 이용에 대한 안내</p>
              <div className="mt-1 border rounded-md bg-slate-50">
                <div className="flex border-b p-4">
                  <label className="flex">
                    <input type="checkbox" checked={agreeAll} onChange={handleAgreeAllChange} className="hidden peer" />
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="fill-slate-300 mr-2 peer-checked:fill-blue-500" >
                      <path d="M423.28-291.22 708.87-576.8l-62.46-62.7-223.13 223.13L312.15-527.5l-62.45 62.7 173.58 173.58ZM480-71.87q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Z" />
                    </svg>
                    모두동의
                  </label>
                </div>
                <ul className="p-4">
                  <li className="flex items-center">
                    <label className="flex items-center">
                      <input type="checkbox" checked={requiredAgreed} onChange={handleRequiredChange} className="hidden peer" />
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-slate-300 mr-2 peer-checked:fill-blue-500" >
                        <path d="M423.28-291.22 708.87-576.8l-62.46-62.7-223.13 223.13L312.15-527.5l-62.45 62.7 173.58 173.58ZM480-71.87q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Z" />
                      </svg>
                      개인정보 수집 및 이용 약관 <span className="ml-1 text-blue-600">(필수)</span>
                    </label>
                    <button className="text-xs ml-auto underline" onClick={handleOpenModal}>내용보기</button>
                  </li>
                  <li className="flex items-center mt-4">
                    <label className="flex items-center">
                      <input type="checkbox" checked={optionalAgreed} onChange={handleOptionalChange} className="hidden peer" />
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-slate-300 mr-2 peer-checked:fill-blue-500">
                        <path d="M423.28-291.22 708.87-576.8l-62.46-62.7-223.13 223.13L312.15-527.5l-62.45 62.7 173.58 173.58ZM480-71.87q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Z" />
                      </svg>
                      <span>유의사항<span className="ml-1 text-blue-600">(선택)</span></span>
                    </label>
                    <button className="text-xs ml-auto underline" onClick={handleOpenModal}>내용보기</button>
                  </li>
                </ul>
              </div>
            </div>



          </div>
        </div>
      </div>
    </main>
  );

}

export default Contact;