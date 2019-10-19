(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{256:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("使用 ZSH 當成 macOS 在 Command Line 的操作介面，天空是藍色的，配合 pipenv 的使用，Python 虛擬環境的運作正常。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_E0FE9E5474053ADFE59BF139FA39C215CCC86B81A5277B5AE04311F8F42685B9_1571196203931_image.png",alt:""}})]),a._v(" "),t("p",[a._v("但是這個看來賞心悅目的操作介面，在撰寫技術文件的時候，卻是個麻煩。因為在 Copy / Paste ，置入了文字編輯器後，呈現的系「亂碼二分之一」不忍卒睹的結果！  😿")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("      ~    11:16:51 \n       cd ~/workspace/Python/django_002\n    \n      ~/workspace/Python/django_002     master      11:17:19 \n       pipenv shell\n    Launching subshell in virtual environment…\n     . /Users/alanjui/.local/share/virtualenvs/django_002-Jo8xwSBw/bin/activate\n    \n      ~/workspace/Python/django_002     master      11:17:44 \n        . /Users/alanjui/.local/share/virtualenvs/django_002-Jo8xwSBw/bin/activate\n    \n       django_002-Jo8xwSBw   ~/workspace/Python/django_002     master      11:17:45 \n      \n")])])]),t("p",[a._v("天才的我，想說：「不然這樣好了！寫程式、做開發的時候，用這外觀看起來美美的 ZSH Shell；但在撰寫技術文件的時候，咱就改用成樸實的 Bash Shell 吧！」")]),a._v(" "),t("p",[a._v("唉呀！我真是太聰明了，這款小代誌，怎可能難倒咱家呢！")]),a._v(" "),t("p",[a._v("待 Bash Shell 的設定完成，開始啟用之後⋯⋯")]),a._v(" "),t("p",[a._v("悲劇了！！")]),a._v(" "),t("h1",{attrs:{id:"問題狀況"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#問題狀況"}},[a._v("#")]),a._v(" 問題狀況")]),a._v(" "),t("p",[a._v("（1）進入 Django 專案的根目錄：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    alanjui@MBP-2018:~/workspace/Python/django_002 (master) \n    $ \n")])])]),t("p",[a._v("（2）輸入指令：pipenv shell ，啟動 Django 專案所使用之 Python 虛擬環境。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    alanjui@MBP-2018:~/workspace/Python/django_002 (master) \n    $ pipenv shell\n    Launching subshell in virtual environment…\n    bash-5.0$  . /Users/alanjui/.local/share/virtualenvs/django_002-Jo8xwSBw/bin/activate\n    (django_002) bash-5.0$ \n")])])]),t("p",[a._v("Shell Prompt 顯示的格式，不再是原先的："),t("strong",[a._v("《使用者帳號》@《電腦名稱》****。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_E0FE9E5474053ADFE59BF139FA39C215CCC86B81A5277B5AE04311F8F42685B9_1571194279863_image.png",alt:""}})]),a._v(" "),t("h1",{attrs:{id:"問題解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#問題解析"}},[a._v("#")]),a._v(" 問題解析")]),a._v(" "),t("p",[a._v("masOS 作業系統的 Bash Shell ，其「預設設定檔」為： ~/.bash_profile，不似 Linux 作業系統為： ~/.bashrc 。")]),a._v(" "),t("p",[a._v("但 pipenv shell 啟動後，會對 Prompt 顯示的設定做變更，其依據為： ~/.bashrc 檔內的設定 ，而不是 macOS 預設的 ~/.bash_profile 。")]),a._v(" "),t("p",[a._v("所以，新增個 ~/.bashrc 檔，使指令：「source ~/.bashrc」的執行，如同直接執行：「source ~/.bash_profile」。")]),a._v(" "),t("div",{staticClass:"language-{2:2} extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    if [ -f ~/.bash_profile ]; then\n        source ~/.bash_profile\n    fi\n")])])]),t("h1",{attrs:{id:"排解方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排解方法"}},[a._v("#")]),a._v(" 排解方法")]),a._v(" "),t("p",[a._v("（1）透過指令：exit，先關閉已啟動之 Python 虛擬環境。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    (django_002) bash-5.0$ exit\n    exit\n    \n    alanjui@MBP-2018:~/workspace/Python/django_002 (master) \n    $ \n")])])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_E0FE9E5474053ADFE59BF139FA39C215CCC86B81A5277B5AE04311F8F42685B9_1571198677813_image.png",alt:""}})]),a._v(" "),t("p",[a._v("（2）新增檔案： ~/.bashrc，檔內設定如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    $ vim ~/.bashrc\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    if [ -f ~/.bash_profile ]; then\n        source ~/.bash_profile\n    fi\n")])])]),t("p",[a._v("（3）回到 Django 專案目錄，透過指令：pipenv shell，重新啟動 Python 虛擬環境。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    alanjui@MBP-2018:~/workspace/Python/django_002 (master) \n    $ pipenv shell\n")])])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_E0FE9E5474053ADFE59BF139FA39C215CCC86B81A5277B5AE04311F8F42685B9_1571195435195_image.png",alt:""}})]),a._v(" "),t("h1",{attrs:{id:"參考文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#參考文件"}},[a._v("#")]),a._v(" 參考文件")]),a._v(" "),t("p",[a._v("https://github.com/pypa/pipenv/issues/844")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/pypa/pipenv/issues/844",target:"_blank",rel:"noopener noreferrer"}},[a._v("pypa/pipenv#844"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("strong",[a._v("《.bash_profile 與 .bashrc 的差異》")]),a._v("\nhttp://jamestw.logdown.com/posts/283485--bash-profile-bashrc-difference?source=post_page-----4834eaf73379----------------------")])])}),[],!1,null,null,null);s.default=n.exports}}]);