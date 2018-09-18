clear:
	@rm .*.swp *~ || echo  "\033[0;33mRoot clean !\033[0m"
	@rm inc/.*.swp inc/*~ || echo "\033[0;33minc/ clean !\033[0m"
	@rm inc/drawJS/.*.swp inc/drawJS/*~ || echo "\033[0;33minc/drawJS/ clean !\033[0m"
	@rm inc/math/.*.swp inc/math/*~ || echo "\033[0;33minc/ clean !\033[0m"
	@echo "\033[1;36m--------------\033[0m"
	@echo "\033[1;36mCleaned up !\033[0m"
	@echo "\033[1;36m--------------\033[0m"
