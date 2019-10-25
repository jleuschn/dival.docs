Search.setIndex({docnames:["dival","dival.config","dival.data","dival.datasets","dival.datasets.dataset","dival.datasets.ellipses_dataset","dival.datasets.lodopab_dataset","dival.datasets.standard","dival.evaluation","dival.hyper_param_search","dival.measure","dival.reconstructors","dival.reconstructors.fbp_unet_reconstructor","dival.reconstructors.odl_reconstructors","dival.reconstructors.reconstructor","dival.reconstructors.regression_reconstructors","dival.util","dival.util.constants","dival.util.odl_noise_random_state","dival.util.odl_utility","dival.util.plot","dival.util.std_out_err_redirect_tqdm","dival.util.zenodo_download","index","installation","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["dival.rst","dival.config.rst","dival.data.rst","dival.datasets.rst","dival.datasets.dataset.rst","dival.datasets.ellipses_dataset.rst","dival.datasets.lodopab_dataset.rst","dival.datasets.standard.rst","dival.evaluation.rst","dival.hyper_param_search.rst","dival.measure.rst","dival.reconstructors.rst","dival.reconstructors.fbp_unet_reconstructor.rst","dival.reconstructors.odl_reconstructors.rst","dival.reconstructors.reconstructor.rst","dival.reconstructors.regression_reconstructors.rst","dival.util.rst","dival.util.constants.rst","dival.util.odl_noise_random_state.rst","dival.util.odl_utility.rst","dival.util.plot.rst","dival.util.std_out_err_redirect_tqdm.rst","dival.util.zenodo_download.rst","index.rst","installation.rst","modules.rst"],objects:{"":{dival:[0,0,0,"-"]},"dival.DataPairs":{__init__:[0,2,1,""],ground_truth:[0,3,1,""],observations:[0,3,1,""]},"dival.Dataset":{__init__:[0,2,1,""],create_keras_generator:[0,2,1,""],create_torch_dataset:[0,2,1,""],generator:[0,2,1,""],get_data_pairs:[0,2,1,""],get_len:[0,2,1,""],get_num_elements_per_sample:[0,2,1,""],get_sample:[0,2,1,""],get_samples:[0,2,1,""],get_shape:[0,2,1,""],get_test_generator:[0,2,1,""],get_test_len:[0,2,1,""],get_train_generator:[0,2,1,""],get_train_len:[0,2,1,""],get_validation_generator:[0,2,1,""],get_validation_len:[0,2,1,""],num_elements_per_sample:[0,3,1,""],random_access:[0,3,1,""],shape:[0,3,1,""],space:[0,3,1,""],standard_dataset_name:[0,3,1,""],supports_random_access:[0,2,1,""],test_len:[0,3,1,""],train_len:[0,3,1,""],validation_len:[0,3,1,""]},"dival.IterativeReconstructor":{__init__:[0,2,1,""],callback:[0,3,1,""]},"dival.LearnedReconstructor":{load_params:[0,2,1,""],save_params:[0,2,1,""],train:[0,2,1,""]},"dival.Measure":{__init__:[0,2,1,""],apply:[0,2,1,""],as_operator_for_fixed_ground_truth:[0,2,1,""],description:[0,3,1,""],get_by_short_name:[0,2,1,""],measure_dict:[0,3,1,""],measure_type:[0,3,1,""],name:[0,3,1,""],short_name:[0,3,1,""]},"dival.Reconstructor":{HYPER_PARAMS:[0,3,1,""],__init__:[0,2,1,""],hyper_params:[0,3,1,""],name:[0,3,1,""],observation_space:[0,3,1,""],reco_space:[0,3,1,""],reconstruct:[0,2,1,""]},"dival.TaskTable":{__init__:[0,2,1,""],append:[0,2,1,""],append_all_combinations:[0,2,1,""],name:[0,3,1,""],results:[0,3,1,""],run:[0,2,1,""],tasks:[0,3,1,""]},"dival.config":{CONFIG:[1,4,1,""],get_config:[1,5,1,""],set_config:[1,5,1,""]},"dival.data":{DataPairs:[2,1,1,""]},"dival.data.DataPairs":{__init__:[2,2,1,""],ground_truth:[2,3,1,""],observations:[2,3,1,""]},"dival.datasets":{Dataset:[3,1,1,""],EllipsesDataset:[3,1,1,""],GroundTruthDataset:[3,1,1,""],LoDoPaBDataset:[3,1,1,""],ObservationGroundTruthPairDataset:[3,1,1,""],dataset:[4,0,0,"-"],ellipses_dataset:[5,0,0,"-"],get_standard_dataset:[3,5,1,""],lodopab_dataset:[6,0,0,"-"],standard:[7,0,0,"-"]},"dival.datasets.Dataset":{__init__:[3,2,1,""],create_keras_generator:[3,2,1,""],create_torch_dataset:[3,2,1,""],generator:[3,2,1,""],get_data_pairs:[3,2,1,""],get_len:[3,2,1,""],get_num_elements_per_sample:[3,2,1,""],get_sample:[3,2,1,""],get_samples:[3,2,1,""],get_shape:[3,2,1,""],get_test_generator:[3,2,1,""],get_test_len:[3,2,1,""],get_train_generator:[3,2,1,""],get_train_len:[3,2,1,""],get_validation_generator:[3,2,1,""],get_validation_len:[3,2,1,""],num_elements_per_sample:[3,3,1,""],random_access:[3,3,1,""],shape:[3,3,1,""],space:[3,3,1,""],standard_dataset_name:[3,3,1,""],supports_random_access:[3,2,1,""],test_len:[3,3,1,""],train_len:[3,3,1,""],validation_len:[3,3,1,""]},"dival.datasets.EllipsesDataset":{__init__:[3,2,1,""],generator:[3,2,1,""],num_elements_per_sample:[3,3,1,""],random_access:[3,3,1,""],shape:[3,3,1,""],space:[3,3,1,""],test_len:[3,3,1,""],train_len:[3,3,1,""],validation_len:[3,3,1,""]},"dival.datasets.GroundTruthDataset":{__init__:[3,2,1,""],create_pair_dataset:[3,2,1,""]},"dival.datasets.LoDoPaBDataset":{__init__:[3,2,1,""],check_for_lodopab:[3,2,1,""],generator:[3,2,1,""],get_ray_trafo:[3,2,1,""],get_sample:[3,2,1,""],get_samples:[3,2,1,""],num_elements_per_sample:[3,3,1,""],random_access:[3,3,1,""],ray_trafo:[3,2,1,""],shape:[3,3,1,""],space:[3,3,1,""],test_len:[3,3,1,""],train_len:[3,3,1,""],validation_len:[3,3,1,""]},"dival.datasets.ObservationGroundTruthPairDataset":{__init__:[3,2,1,""],generator:[3,2,1,""]},"dival.datasets.dataset":{Dataset:[4,1,1,""],GroundTruthDataset:[4,1,1,""],ObservationGroundTruthPairDataset:[4,1,1,""]},"dival.datasets.dataset.Dataset":{__init__:[4,2,1,""],create_keras_generator:[4,2,1,""],create_torch_dataset:[4,2,1,""],generator:[4,2,1,""],get_data_pairs:[4,2,1,""],get_len:[4,2,1,""],get_num_elements_per_sample:[4,2,1,""],get_sample:[4,2,1,""],get_samples:[4,2,1,""],get_shape:[4,2,1,""],get_test_generator:[4,2,1,""],get_test_len:[4,2,1,""],get_train_generator:[4,2,1,""],get_train_len:[4,2,1,""],get_validation_generator:[4,2,1,""],get_validation_len:[4,2,1,""],num_elements_per_sample:[4,3,1,""],random_access:[4,3,1,""],shape:[4,3,1,""],space:[4,3,1,""],standard_dataset_name:[4,3,1,""],supports_random_access:[4,2,1,""],test_len:[4,3,1,""],train_len:[4,3,1,""],validation_len:[4,3,1,""]},"dival.datasets.dataset.GroundTruthDataset":{__init__:[4,2,1,""],create_pair_dataset:[4,2,1,""]},"dival.datasets.dataset.ObservationGroundTruthPairDataset":{__init__:[4,2,1,""],generator:[4,2,1,""]},"dival.datasets.ellipses_dataset":{EllipsesDataset:[5,1,1,""]},"dival.datasets.ellipses_dataset.EllipsesDataset":{__init__:[5,2,1,""],generator:[5,2,1,""],num_elements_per_sample:[5,3,1,""],random_access:[5,3,1,""],shape:[5,3,1,""],space:[5,3,1,""],test_len:[5,3,1,""],train_len:[5,3,1,""],validation_len:[5,3,1,""]},"dival.datasets.lodopab_dataset":{LoDoPaBDataset:[6,1,1,""],download_lodopab:[6,5,1,""]},"dival.datasets.lodopab_dataset.LoDoPaBDataset":{__init__:[6,2,1,""],check_for_lodopab:[6,2,1,""],generator:[6,2,1,""],get_ray_trafo:[6,2,1,""],get_sample:[6,2,1,""],get_samples:[6,2,1,""],num_elements_per_sample:[6,3,1,""],random_access:[6,3,1,""],ray_trafo:[6,2,1,""],shape:[6,3,1,""],space:[6,3,1,""],test_len:[6,3,1,""],train_len:[6,3,1,""],validation_len:[6,3,1,""]},"dival.datasets.standard":{get_standard_dataset:[7,5,1,""]},"dival.evaluation":{ResultTable:[8,1,1,""],TaskTable:[8,1,1,""]},"dival.evaluation.ResultTable":{__init__:[8,2,1,""],apply_measures:[8,2,1,""],plot_all_reconstructions:[8,2,1,""],plot_convergence:[8,2,1,""],plot_performance:[8,2,1,""],plot_reconstruction:[8,2,1,""],print_summary:[8,2,1,""],results:[8,3,1,""],to_string:[8,2,1,""]},"dival.evaluation.TaskTable":{__init__:[8,2,1,""],append:[8,2,1,""],append_all_combinations:[8,2,1,""],name:[8,3,1,""],results:[8,3,1,""],run:[8,2,1,""],tasks:[8,3,1,""]},"dival.hyper_param_search":{optimize_hyper_params:[9,5,1,""]},"dival.measure":{L2Measure:[10,1,1,""],MSEMeasure:[10,1,1,""],Measure:[10,1,1,""],PSNRMeasure:[10,1,1,""],SSIMMeasure:[10,1,1,""],gen_unique_name:[10,5,1,""]},"dival.measure.L2Measure":{apply:[10,2,1,""],description:[10,3,1,""],measure_type:[10,3,1,""],name:[10,3,1,""],short_name:[10,3,1,""]},"dival.measure.MSEMeasure":{apply:[10,2,1,""],description:[10,3,1,""],measure_type:[10,3,1,""],name:[10,3,1,""],short_name:[10,3,1,""]},"dival.measure.Measure":{__init__:[10,2,1,""],apply:[10,2,1,""],as_operator_for_fixed_ground_truth:[10,2,1,""],description:[10,3,1,""],get_by_short_name:[10,2,1,""],measure_dict:[10,3,1,""],measure_type:[10,3,1,""],name:[10,3,1,""],short_name:[10,3,1,""]},"dival.measure.PSNRMeasure":{__init__:[10,2,1,""],apply:[10,2,1,""],data_range:[10,3,1,""],description:[10,3,1,""],measure_type:[10,3,1,""],name:[10,3,1,""],short_name:[10,3,1,""]},"dival.measure.SSIMMeasure":{__init__:[10,2,1,""],apply:[10,2,1,""],description:[10,3,1,""],measure_type:[10,3,1,""],name:[10,3,1,""],short_name:[10,3,1,""]},"dival.reconstructors":{FunctionReconstructor:[11,1,1,""],IterativeReconstructor:[11,1,1,""],LearnedReconstructor:[11,1,1,""],Reconstructor:[11,1,1,""],fbp_unet_reconstructor:[12,0,0,"-"],odl_reconstructors:[13,0,0,"-"],reconstructor:[14,0,0,"-"],regression_reconstructors:[15,0,0,"-"]},"dival.reconstructors.FunctionReconstructor":{"function":[11,3,1,""],__init__:[11,2,1,""],fun_args:[11,3,1,""],fun_kwargs:[11,3,1,""]},"dival.reconstructors.IterativeReconstructor":{__init__:[11,2,1,""],callback:[11,3,1,""]},"dival.reconstructors.LearnedReconstructor":{load_params:[11,2,1,""],save_params:[11,2,1,""],train:[11,2,1,""]},"dival.reconstructors.Reconstructor":{HYPER_PARAMS:[11,3,1,""],__init__:[11,2,1,""],hyper_params:[11,3,1,""],name:[11,3,1,""],observation_space:[11,3,1,""],reco_space:[11,3,1,""],reconstruct:[11,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor":{CachedFBPDataset:[12,1,1,""],Concat:[12,1,1,""],DownBlock:[12,1,1,""],FBPDataset:[12,1,1,""],FBPUNetReconstructor:[12,1,1,""],InBlock:[12,1,1,""],OutBlock:[12,1,1,""],Skip:[12,1,1,""],UpBlock:[12,1,1,""],generate_fbp_cache:[12,5,1,""],get_skip_model:[12,5,1,""]},"dival.reconstructors.fbp_unet_reconstructor.CachedFBPDataset":{__init__:[12,2,1,""],get_sample:[12,2,1,""],get_samples:[12,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor.Concat":{__init__:[12,2,1,""],forward:[12,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor.DownBlock":{__init__:[12,2,1,""],forward:[12,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor.FBPDataset":{__init__:[12,2,1,""],generator:[12,2,1,""],get_sample:[12,2,1,""],get_samples:[12,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor.FBPUNetReconstructor":{__init__:[12,2,1,""],load_params:[12,2,1,""],save_params:[12,2,1,""],train:[12,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor.InBlock":{__init__:[12,2,1,""],forward:[12,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor.OutBlock":{__init__:[12,2,1,""],forward:[12,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor.Skip":{__init__:[12,2,1,""],forward:[12,2,1,""]},"dival.reconstructors.fbp_unet_reconstructor.UpBlock":{__init__:[12,2,1,""],forward:[12,2,1,""]},"dival.reconstructors.odl_reconstructors":{CGReconstructor:[13,1,1,""],FBPReconstructor:[13,1,1,""],GaussNewtonReconstructor:[13,1,1,""],KaczmarzReconstructor:[13,1,1,""],LandweberReconstructor:[13,1,1,""],MLEMReconstructor:[13,1,1,""]},"dival.reconstructors.odl_reconstructors.CGReconstructor":{__init__:[13,2,1,""],callback:[13,3,1,""],niter:[13,3,1,""],op:[13,3,1,""],op_is_symmetric:[13,3,1,""],x0:[13,3,1,""]},"dival.reconstructors.odl_reconstructors.FBPReconstructor":{HYPER_PARAMS:[13,3,1,""],__init__:[13,2,1,""],fbp_op:[13,3,1,""]},"dival.reconstructors.odl_reconstructors.GaussNewtonReconstructor":{__init__:[13,2,1,""],callback:[13,3,1,""],niter:[13,3,1,""],op:[13,3,1,""],x0:[13,3,1,""],zero_seq:[13,3,1,""]},"dival.reconstructors.odl_reconstructors.KaczmarzReconstructor":{__init__:[13,2,1,""],callback:[13,3,1,""],callback_loop:[13,3,1,""],niter:[13,3,1,""],omega:[13,3,1,""],ops:[13,3,1,""],projection:[13,3,1,""],random:[13,3,1,""],x0:[13,3,1,""]},"dival.reconstructors.odl_reconstructors.LandweberReconstructor":{__init__:[13,2,1,""],callback:[13,3,1,""],niter:[13,3,1,""],omega:[13,3,1,""],op:[13,3,1,""],projection:[13,3,1,""],x0:[13,3,1,""]},"dival.reconstructors.odl_reconstructors.MLEMReconstructor":{__init__:[13,2,1,""],callback:[13,3,1,""],niter:[13,3,1,""],noise:[13,3,1,""],op:[13,3,1,""],sensitivities:[13,3,1,""],x0:[13,3,1,""]},"dival.reconstructors.reconstructor":{FunctionReconstructor:[14,1,1,""],IterativeReconstructor:[14,1,1,""],LearnedReconstructor:[14,1,1,""],Reconstructor:[14,1,1,""]},"dival.reconstructors.reconstructor.FunctionReconstructor":{"function":[14,3,1,""],__init__:[14,2,1,""],fun_args:[14,3,1,""],fun_kwargs:[14,3,1,""]},"dival.reconstructors.reconstructor.IterativeReconstructor":{__init__:[14,2,1,""],callback:[14,3,1,""]},"dival.reconstructors.reconstructor.LearnedReconstructor":{load_params:[14,2,1,""],save_params:[14,2,1,""],train:[14,2,1,""]},"dival.reconstructors.reconstructor.Reconstructor":{HYPER_PARAMS:[14,3,1,""],__init__:[14,2,1,""],hyper_params:[14,3,1,""],name:[14,3,1,""],observation_space:[14,3,1,""],reco_space:[14,3,1,""],reconstruct:[14,2,1,""]},"dival.reconstructors.regression_reconstructors":{LinRegReconstructor:[15,1,1,""]},"dival.reconstructors.regression_reconstructors.LinRegReconstructor":{HYPER_PARAMS:[15,3,1,""],__init__:[15,2,1,""],load_params:[15,2,1,""],save_params:[15,2,1,""],train:[15,2,1,""],weights:[15,3,1,""]},"dival.util":{constants:[17,0,0,"-"],odl_noise_random_state:[18,0,0,"-"],odl_utility:[19,0,0,"-"],plot:[20,0,0,"-"],std_out_err_redirect_tqdm:[21,0,0,"-"],zenodo_download:[22,0,0,"-"]},"dival.util.constants":{MU_AIR:[17,4,1,""],MU_MAX:[17,4,1,""],MU_WATER:[17,4,1,""]},"dival.util.odl_noise_random_state":{poisson_noise:[18,5,1,""],salt_pepper_noise:[18,5,1,""],uniform_noise:[18,5,1,""],white_noise:[18,5,1,""]},"dival.util.odl_utility":{NoiseOperator:[19,1,1,""],apply_noise:[19,5,1,""],uniform_discr_element:[19,5,1,""]},"dival.util.odl_utility.NoiseOperator":{__init__:[19,2,1,""]},"dival.util.plot":{plot_image:[20,5,1,""],plot_images:[20,5,1,""]},"dival.util.std_out_err_redirect_tqdm":{DummyTqdmFile:[21,1,1,""],std_out_err_redirect_tqdm:[21,5,1,""]},"dival.util.std_out_err_redirect_tqdm.DummyTqdmFile":{__init__:[21,2,1,""],file:[21,3,1,""],flush:[21,2,1,""],write:[21,2,1,""]},"dival.util.zenodo_download":{download_file:[22,5,1,""],download_zenodo_record:[22,5,1,""],input_yes_no:[22,5,1,""]},dival:{DataPairs:[0,1,1,""],Dataset:[0,1,1,""],IterativeReconstructor:[0,1,1,""],LearnedReconstructor:[0,1,1,""],Measure:[0,1,1,""],Reconstructor:[0,1,1,""],TaskTable:[0,1,1,""],config:[1,0,0,"-"],data:[2,0,0,"-"],datasets:[3,0,0,"-"],evaluation:[8,0,0,"-"],get_config:[0,5,1,""],get_standard_dataset:[0,5,1,""],hyper_param_search:[9,0,0,"-"],measure:[10,0,0,"-"],reconstructors:[11,0,0,"-"],set_config:[0,5,1,""],util:[16,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","data","Python data"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:data","5":"py:function"},terms:{"362x362":[3,6],"5d6803c116ec1130d484a4ab8c00c603":22,"abstract":[0,10,11,14],"byte":22,"case":[0,3,4,8,11,12,14],"class":[0,2,3,4,5,6,8,9,10,11,12,13,14,15,19,21,23],"default":[0,1,3,4,5,6,7,8,9,11,12,13,14,15,18,19,20,22],"final":13,"float":[0,3,6,7,10,11,13,14,15,18,19,20],"function":[0,3,4,8,11,12,14,18,19,20,23],"import":1,"int":[0,3,4,5,6,8,9,11,12,13,14,18,19,20,22],"new":[0,3,4,6,11,12,14,20],"return":[0,1,3,4,6,7,8,10,11,12,13,14,18,20,22],"short":[0,8,10],"super":[0,10],"true":[0,1,3,4,5,6,7,8,9,11,12,13,14,15,22],"try":[0,8],"while":12,Axes:[8,20],For:[0,3,4,6,7,13,18,20],One:13,The:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22],Then:12,There:[0,11,14],Used:8,Will:[0,8],__getitem__:[0,2,3,4],__init__:[0,2,3,4,5,6,8,10,11,12,13,14,15,19,21],__len__:[0,2],__name__:[0,10],__str__:8,_reconstruct:[0,11,14],a_inv:15,abc:[0,10],abs:[0,3,6,7,19],abund:18,accept:[3,4],access:[0,3,4,6],accord:8,account:8,accur:[0,2,8,11,12,14],adapt:[0,11,12,14,15],add:18,added:[0,3,7,18],addit:[0,3,4,8,12,22],adjoint:13,after:[0,8,11,14],afterward:[0,8,12],air:17,algorithm:13,all:[0,3,4,5,8,9,10,12,13,20,22],alpha:15,alreadi:[0,10],also:[0,3,4,8,11,14],although:12,alwai:22,angl:[0,3,6,7],ani:[0,11,14],anoth:[0,10],append:[0,8,10],append_all_combin:[0,8],appli:[0,3,4,6,7,8,10,12,13,15,19],applic:[0,3,4,12],apply_measur:8,apply_nois:19,architectur:12,arg:[11,14],argument:[0,3,4,7,8,10,11,13,14,19,20],around:19,arrai:[0,3,4,6,11,12,14,19,20],arxiv:[0,3,6,7],as_operator_for_fixed_ground_truth:[0,10],ask:22,assign:[0,11,14],assum:[13,15],astra_cpu:[0,3,6,7],astra_cuda:[0,3,6,7,12],attain:[0,10],attenu:[0,3,6,7,17],attribut:[0,3,4,7,8,9,10,11,13,14],auto:20,automat:[0,9,10,11,14],avail:[0,3,4,6,7],averag:8,avoid:[0,3,6,7],ax_list:8,axes:[8,20],axesimag:20,back:[12,13],backend:[3,6,12],bar:[0,8,9,12],base:[0,2,3,4,5,6,7,8,10,11,12,13,14,15,19,21,22,23],base_path:22,base_tensor:[0,3,4],batch:[0,3,4,12],batch_siz:[0,3,4,12],beam:[0,3,6,7],beer:[3,6],befor:[0,3,6,7,8],begin:[0,3,4,8],behavior:8,belong:19,below:23,benchmark:7,between:20,bilinear:[0,3,7],bit:17,bool:[0,3,4,5,6,7,8,9,11,12,13,14,19,22],both:[0,1,3,6,7,9,11,14,20],bound:18,build:8,bundl:[0,2],cach:12,cachedfbpdataset:12,calcul:[0,10],call:[0,3,4,6,8,10,11,12,13,14,18,19,21],callabl:[11,13,14],callback:[0,8,11,13,14],callback_loop:13,can:[0,3,4,6,8,10,11,12,13,14],care:12,cartesian:[0,8],cbar:20,ceil:20,cell:19,center:19,cgreconstructor:13,chang:[0,1,8,13],channel:12,check:[0,3,4,6,22],check_for_lodopab:[3,6],checksum:22,choic:[0,8,11,13,14],choos:[0,11,14],choosen:[3,5],chosen:[3,5,9,20],chunk:22,chunk_siz:22,classmethod:[0,10],color:[18,20],colorbar:20,column:[8,20],com:22,combin:[0,8,9,12],compar:[0,8,10,23],compare_ssim:10,complex:[9,18],compon:19,comput:[0,8,12,13,20,22],concat:12,confer:12,config:[0,23,25],configur:[0,1,3,6,11,14],conjug:13,conjugate_gradi:13,conjugate_gradient_norm:13,constant:[0,16,23],construct:[8,12],constructor:[3,6,8,10,13],contain:[0,3,6,7,8,13],content:[23,25],context:21,converg:8,convert:[8,18],convolut:12,copi:[0,1,18],correspond:[0,3,6,7,15],cosin:13,could:[3,5,13],count:[0,3,6,7],creat:[0,1,3,4,5,6,11,12,14,18,20],create_keras_gener:[0,3,4],create_pair_dataset:[3,4],create_torch_dataset:[0,3,4],crime:[0,3,7],cuda:12,current:[0,1,3,7,8,11,14,18,22],custom:[0,3,8,11,14],cvf:12,cvpr:12,data:[0,3,4,5,6,7,8,9,10,11,12,14,15,19,20,23,25],data_path:1,data_rang:10,datafram:8,datapair:[0,2,3,4,8,9],dataset:[0,8,9,11,12,14,15,23,25],deep:12,def:21,defin:[3,11,12,14],demand:22,depend:[0,3,4,6,9,11,14,20],deriv:13,describ:10,descript:[0,2,10],destin:22,detail:[0,8,13],detector:[0,3,6,7],determin:[0,10,11,13,14],deviat:[0,3,7,18,19],dict:[0,1,3,4,5,7,8,9,10,11,12,14,15,19,20],differ:[0,1,3,7,8,9,10,18,20],digest:22,dimens:[0,3,4,5,12],dimension:[0,2],dir:[0,11,14],directli:[0,1,3,4,12,13],directori:[0,11,14],discr:[0,11,14,19],discret:[0,3,7,19],discretizedspac:[0,11,14,19],displai:8,distanc:[0,10],distort:[0,2],distribut:[0,11,14,18,19],dival:23,divid:[0,3,6,7,19],doc:[19,21],document:[0,3,6,7,8,20],doe:[0,1,11,14],doi:[10,12],domain:[3,4,13,19],done:21,dose:[0,3,6,7],downblock:12,download:22,download_fil:22,download_lodopab:6,download_zenodo_record:22,dtype:[3,5,6],duck:[0,3,4],dummi:21,dummytqdmfil:21,dure:12,each:[0,3,4,6,8,9,11,12,13,14,19,20,22],effect:[0,3,4,18],effici:13,either:[0,1,3,6,8,10,11,14,20],element:[0,2,3,4,5,6,8,10,11,12,13,14,18,19],ellips:[0,3,5,7],ellipses_dataset:[0,3,23],ellipsesdataset:[0,3,5,7],ellipsoid_phantom:[3,5],els:21,empti:22,end:12,ensur:[0,10],enter:22,entiti:9,entri:15,epoch:[0,3,4,12],equal:[8,20],equat:13,equidist:[0,11,14],equival:19,error:10,estim:[0,3,7],euclidean:10,evalu:[0,3,9,10,11,14,23,25],even:[0,8],eventu:8,everi:[0,3,4,12,20],exampl:[3,23],except:9,exist:[0,1,3,6,11,14],exp:[3,6],expect:13,extens:[0,11,14],factor:[3,6,19],fals:[0,3,4,5,6,7,8,11,12,13,14,19,22],fast:[3,6],fastest:[0,8],fbp:[0,3,7,12],fbp_impl:12,fbp_op:[0,3,7,13],fbp_unet_reconstructor:[0,11,23],fbpdataset:12,fbpreconstructor:13,fbpunetreconstructor:12,fetch:[0,3,4],field:[0,8,9,11,14,18],fig:20,fig_siz:[8,20],figur:20,file:[0,1,3,6,9,11,12,14,15,21,22],filenam:[12,22],filter:[12,13],filter_typ:13,first:[0,3,4,6,12],fix:[0,3,4,10,11,14],fixed_se:[0,3,5,7],float32:[3,5,6],flush:21,fly:12,folder:[15,22],follow:[0,3,4,11,12,14],format:[0,10,17],formatt:8,former:12,forward:[0,3,4,6,7,8,12,13],forward_op:[3,4],found:8,frac:18,fraction:18,frequency_sc:13,from:[0,1,3,4,6,7,8,10,11,12,14,15,19,20,21,22],froustei:12,full:[0,1],fun_arg:[11,14],fun_kwarg:[11,14],func:21,functionreconstructor:[11,14],fundament:23,further:20,gauss:13,gauss_newton:13,gaussian:[0,3,7,18],gaussnewtonreconstructor:13,gen_unique_nam:10,gener:[0,3,4,5,6,7,10,12,18,19],generate_fbp_cach:12,geometri:[0,3,6,7],get:[0,3,4,6,12,23],get_by_short_nam:[0,10],get_config:[0,1],get_data_pair:[0,3,4],get_len:[0,3,4],get_num_elements_per_sampl:[0,3,4],get_ray_trafo:[0,3,6,7,12],get_sampl:[0,3,4,6,12],get_shap:[0,3,4],get_skip_model:12,get_standard_dataset:[0,3,4,7],get_test_gener:[0,3,4],get_test_len:[0,3,4],get_train_gener:[0,3,4],get_train_len:[0,3,4],get_validation_gener:[0,3,4],get_validation_len:[0,3,4],gist:22,github:22,give:[0,3,4],given:[0,3,6,8,10,13,18,19,20,22],global:[1,18],good:[0,2,10],gov:17,gradient:13,greater:[0,3,6,7],grid:[0,9,11,14],grid_search:[0,11,14],grid_search_opt:[0,9,11,13,14],gridspec_kw:8,ground:[0,2,3,4,6,7,8,10,12,15],ground_truth:[0,2,3,6,10],ground_truth_gen:[3,4],groundtruthdataset:[3,4,5],ham:13,hann:13,has:[0,3,4,7,11,12,14],hash:22,have:[0,3,4,5,6,8,11,14,23],help:[0,2,8,11,12,14],here:9,hex:22,hidden:[0,11,14],hide:8,hide_column:8,high:18,high_val:18,hold:[0,1,3,4,6,12],hook:12,host:[0,3,6,7],how:[0,8,11,14],http:[0,3,6,7,10,22],hyper:[0,8,9,11,14],hyper_param:[0,8,9,11,13,14,15],hyper_param_choic:[0,8],hyper_param_search:[0,23,25],hyper_params_overrid:9,hyperopt:[0,9,11,14],hyperopt_max_ev:9,hyperopt_max_evals_retrain:9,hyperopt_opt:[0,11,14],hyperopt_rst:9,identifi:[0,10],idri:[0,3,6,7],ieee:12,ignor:[0,3,4,8,11,12,14,20],imag:[0,3,5,6,7,12,20],image_s:[3,5],imaginari:18,immedi:21,impl:[0,3,6,7,12],implement:[0,2,3,4,6,7,11,12,14],improv:13,imshow:20,in_ch:12,inblock:12,incid:[0,3,6,7],includ:[0,9,11,14,22],index:[0,3,4,6,8,10,12],indic:[0,3,4,6],individu:20,inf:15,infer:[0,3,4],infinit:[3,5],inform:[20,22],inherit:[0,10],init:15,initi:[0,2,8,11,12,13,14],inner:13,inp:[19,22],input:[0,11,12,14,19,22],input_yes_no:22,instanc:[0,10,11,12,14],instead:[12,18],integ:18,intens:[18,19],intermedi:[0,8],interpol:[0,3,7],interpret:[8,18],interv:[0,11,14],invers:[0,3,7,12,13,15],item:15,iter:[0,8,11,13,14],iterativereconstructor:[0,11,13,14],its:[0,3,4,6,7,8,11,12,14,15],jin:12,jleuschn:1,json:1,kaczmarz:13,kaczmarzreconstructor:13,kei:[0,3,4,5,6,9,10,11,12,14],kera:[0,3,4],kernel_s:12,key_path:[0,1],keyword:[0,3,4,7,8,10,11,14,19,20],known:[0,2],kwarg:[0,3,7,8,10,11,12,13,14,15,20],l2_regular:15,l2measur:[0,10],lak:13,lambda:18,lambert:[3,6],landweb:13,landweberreconstructor:13,larg:[0,10],last:[3,6,22],latest:[0,8],latter:12,law:[3,6],learn:[0,3,11,12,14,15,23],learnedreconstructor:[0,8,9,11,12,14,15],least:[0,8],left:[3,6],lempitski:12,len:20,length:[3,5],librari:[1,9],licens:22,lidc:[0,3,6,7],lie:[3,6],like:[0,3,4,6,9,10,11,12,13,14,18,19,20,21],likelihood:13,line:[0,8],linear:[0,3,6,11,13,14,15,17],linearli:[3,6],linregreconstructor:15,list:[0,2,3,4,8,11,14,20,23],load:[0,1,3,4,8,11,12,14,15],load_param:[0,11,12,14,15],local:22,localdata:1,lodopab:[0,3,6,7],lodopab_dataset:[0,1,3,23],lodopabdataset:[3,6],log10:10,log:[0,3,6,7,11,14],log_bas:[0,11,14],logan:13,logarithm:[0,11,14],look:[0,3,4,23],lookup:[0,10],loop:13,low:[0,2,3,6,7,18],low_dose_dataset:1,low_val:18,lower:18,made:1,mai:[0,1,2,3,4,11,13,14],manag:21,mani:[3,5,20],manipul:[0,1],manual:[0,8,11,14],map:[3,6],match:[0,3,4,6,12,22],mathbb:18,matplotlib:[8,20],matrix:15,max:10,max_colwidth:8,max_pt:[3,5,6],maxim:13,maximuim:18,maximum:[3,5,6,8,13,17,18],mccann:12,md5:22,md5sum:22,md5sum_check:22,mean:[0,3,4,7,8,10,12,18,19],measur:[0,8,9,23,25],measure_dict:[0,10],measure_typ:[0,9,10],measure_valu:8,method:[0,3,6,8,11,13,14,20,23],min:10,min_photon_count:[0,3,6,7],min_pt:[3,5,6],minimum:[3,5,6,18],misc:8,miss:8,mit:22,mlem:13,mlemreconstructor:13,model:[0,3,6,7,13],modifi:[13,18],modul:[23,25],more:[0,3,4,12,18],mse:[0,10],msemeasur:[0,10],mu_air:17,mu_max:17,mu_wat:17,multipl:[0,3,4,5,8,11,12,13,14,20],multipli:19,must:[0,3,4,8,11,12,13,14],name:[0,2,3,4,7,8,10,11,14,22],name_orig:10,ncol:20,ndarrai:[3,6,8,15,20],need:12,neg:13,nest:21,net:12,network:12,neural:12,newli:[3,6],newton:13,next:8,nist:17,niter:13,nois:[0,3,4,6,7,10,13,18,19],noise_kwarg:[3,4,19],noise_se:[3,4],noise_typ:[3,4,19],noiseless:[0,3,6,7],noiseoper:[3,4,19],non:[3,6,13],none:[0,2,3,4,5,6,8,9,10,11,12,13,14,15,18,19,20,21,22],norm:[0,3,7],normal:[0,3,5,6,7,13,18,19],normalize_ray_trafo:[0,3,7],note:[0,1,3,6,8,18],notimplementederror:[0,3,4],npy:12,nrow:20,num_data_loader_work:12,num_elements_per_sampl:[0,3,4,5,6],num_sampl:[0,11,13,14],number:[0,3,4,5,8,9,11,12,13,14,20,22],numer:17,numpi:18,object:[0,1,2,3,4,8,9,10,11,13,14,20,21],obs:[3,6],observ:[0,2,3,4,6,7,11,12,13,14,15],observation_model:[0,3,6,7],observation_spac:[0,11,14],observationgroundtruthpairdataset:[3,4],obtain:[0,3,7],odl:[0,3,4,5,6,7,10,11,12,13,14,18,19],odl_noise_random_st:[0,16,19,23],odl_reconstructor:[0,11,23],odl_util:[0,16,23],omega:13,omit:[0,2,3,4,5],onc:13,one:[0,3,4,7,8,9,11,12,13,14,18,20],onli:[0,3,4,6,8,9,11,12,13,14,15,18,20],op_is_symmetr:13,oper:[0,3,4,6,7,10,12,13,15,19],opnorm:[0,3,7],ops:13,optim:[0,9,11,14],optimize_hyper_param:9,option:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19,20,22],order:[0,3,6,7,8,10,13],org:[0,3,6,7,10],origin:[0,3,7,8,19,21],osmlem:13,otherwis:[0,3,4,22],out:[0,3,4,6,11,12,14],out_ch:12,out_ground_truth:[3,6],out_observ:[3,6],outblock:12,outer:13,output:22,over:[0,8,11,14],overrid:[8,9],overridden:[0,11,12,14],packag:[14,23,25],pad:13,pair:[0,3,4,6,7,8,12,15],panda:8,parallel:[0,3,4,6,7,12],paramet:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19,20,21,22],part:[0,3,4,5,6,12,18,22],pass:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,19,20,21],path:[0,1,3,6,11,14,15,22],pattern:12,peak:10,pepper:18,per:[0,3,4,5,6,7,12,18],perform:[0,3,4,8,9,11,12,14,15],phantom:[0,3,5,7,18,19],photon:[0,3,6,7],physic:17,pil:20,pixel:[0,3,5,6,7],place:[0,11,13,14,19],plan:13,plot:[0,8,16,23],plot_all_reconstruct:8,plot_converg:8,plot_ground_truth:8,plot_imag:[8,20],plot_perform:8,plot_reconstruct:8,pointwis:18,poisson:[0,3,6,7,13,18,19],poisson_nois:18,popular:10,posit:13,possibl:[0,2,8,10,20],post:[0,3,4,6,7],post_processor:[3,4,13],postprocess:12,potenti:[0,3,4],pre:[0,3,6,7],pre_processor:13,prefer:[0,3,4],preprint:[0,3,6,7],previous:8,print:[0,8,21,22],print_summari:8,prior:12,probabl:18,problem:[12,13,23],process:12,processor:[3,4],product:[0,8,18],productspac:18,progress:[0,8,9,12],progressbar:[21,22],project:[0,3,6,7,12,13],properti:[3,6],propot:18,provid:[0,3,4,5,6,7,10,12,13,14,15,17,19,20],psnr:[0,10],psnrmeasur:[0,10],python:23,qualiti:[0,2,10],rai:[0,3,6,7,12],rais:[0,3,4,8],ram:13,random:[0,3,4,5,7,9,11,13,14,18,19],random_access:[0,3,4,5,6],random_st:[18,19],randomli:[3,5],randomst:[9,18,19],rang:[0,3,4,5,6,10,11,12,13,14,15,19,20,21],rather:8,ratio:10,ray_trafo:[0,3,6,7,12,13],raytransform:[0,3,6,7,12,13],read:[0,3,6,8],real:[0,3,6,7,11,14,18],recip:12,reco_spac:[0,11,14],recognit:12,recommend:[0,3,4,23],recomput:13,recompute_fbp_op:13,reconstruct:[0,2,3,6,7,8,10,11,13,14],reconstructor:[0,3,8,9,23,25],record:[0,3,6,7,22],record_id:22,rect:20,redirect:21,refer:[0,2,12],regardless:[0,3,4],regist:[0,10,12],registri:[0,10],regress:15,regression_reconstructor:[0,11,23],regular:[13,15],rel:18,relat:[3,6,19],relative_stddev:19,relax:13,repeatedli:22,replac:[0,1,2,3,6,7,13,18],represent:17,request:[0,3,4,8,12],requir:[0,3,6,7,8,9,13],reshap:[0,3,4],resolut:[0,3,7],respect:[8,18],restor:[0,8],result:[0,3,4,8,11,14],resultt:[0,8],retrain:[0,9,11,14,15],retriev:20,row:[8,20],row_list:8,run:[0,8,12],ruxi:22,salt:18,salt_pepp:19,salt_pepper_nois:18,salt_vs_pepp:18,same:[0,8,9,11,14,20],sampl:[0,3,4,5,6,11,12,14,18,19],save:[0,8,11,12,14,15],save_iter:[0,8],save_iterates_measure_valu:[0,8],save_iterates_step:[0,8],save_param:[0,11,12,14,15],save_reconstruct:[0,8],scalar:18,scale:[0,3,6,7,11,12,14],scaling_factor:19,script:23,search:[0,9,11,14],see:[0,2,3,4,6,8,11,12,13,14,20],seed:[0,3,4,5,7,18,19],seem:[0,3,4,6],self:[0,2,3,4,8,11,12,13,14],sensit:13,separ:[0,1],sequenc:[0,3,4,8,11,13,14,20],set:[0,3,4,5,8,10,11,14,20],set_config:[0,1],shall:[0,8],shape:[0,3,4,5,6,7],shepp:13,short_nam:[0,8,10],should:[0,3,4,8,9,10,11,12,13,14,15,18],show:[0,8,9,12],show_column:8,show_pbar:12,show_progress:[0,8],show_progressbar:9,shown:20,shuffl:[0,3,4],sign:9,signal:10,signatur:[0,2,8,11,12,14],silent:12,similar:[10,12],simpl:[0,3,4,6],simul:[0,3,6,7],sinc:[0,3,4,12,13],singl:[0,3,4,6,12,13],sinogram:[3,6,13],size:[0,3,4,6,8,12,19],skimag:[0,3,6,7,10],skip:[0,8,12],skip_ch:12,skip_channel:12,skip_train:[0,8],slice:[0,3,4,6,12],slowest:[0,8],small:[0,10],solv:13,solver:[0,11,13,14],some:[0,3,4,10,23],sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22],space:[0,2,3,4,5,6,8,11,14,18,19],specif:[0,3,9,11,14],specifi:[0,3,4,8,9,10,11,12,13,14,19],spectral:[0,3,7],sqrt:10,squar:10,ssim:[0,10],ssimmeasur:[0,10],stack:[0,3,4,12],standard:[0,3,11,14,17,18,19,23],standard_dataset_nam:[0,3,4,7],start:23,state:[0,8,9,12,18,19],statist:13,std_out:21,std_out_err_redirect_tqdm:[0,16,23],stddev:[18,19],stderr:21,stdout:21,step:[0,8],store:[0,1,3,7,8,11,12,14,22],str:[0,1,3,4,7,8,9,10,11,12,14,15,21,22],stream:9,string:[8,20],strongli:[0,3,4],structur:[9,10],sub:[0,1,8],sub_config:[0,1],sub_task_ind:8,subclass:[0,3,4,10,11,12,14],submodul:[23,25],subpackag:25,subplot:[8,20],subset:[3,4,13],subspac:18,subtyp:[0,11,14],success:22,suffix:[0,10],sum:[10,22],sum_i:15,summari:8,support:[0,3,4,7,8,9,11,14,18],supports_random_access:[0,3,4],synthet:[0,3,7],sys:21,system:13,tabl:[0,8],take:[8,12,13,18],taken:[0,8,10,11,12,14,18,21],task:[0,8],task_ind:8,tasktabl:[0,8],tensorspac:[0,3,4,18],term:13,test:[0,3,4,5,6,8,9,12,23],test_data:[0,8],test_ind:8,test_len:[0,3,4,5,6],text:[0,8,21],than:[0,3,6,7,8,18],thei:[0,3,4,6],them:[8,12,20],thi:[0,3,4,5,6,7,8,9,10,11,12,13,14,18,19,21,23],those:[3,4],time:13,tip:[10,12],to_str:8,tomo:[0,3,6,7,12,13],tool:8,torch:[0,3,4,12],tqdm:[0,8,9,12,21],tqdm_file:9,train:[0,3,4,5,6,8,9,11,12,14,15],train_len:[0,3,4,5,6],transact:12,transform:[0,3,6,7,12],treat:9,tri:[0,3,4,8],truth:[0,2,3,4,6,7,8,10,12,15],tupl:[0,3,4,6,12,20],turn:20,two:[0,3,4,11,12,14],type:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,15,18,19,21,22],typic:[0,3,7],ulyanov:12,undefin:[0,3,6,7],under:[3,6,22],uniform:[0,11,14,18,19],uniform_discr:[3,5,6],uniform_discr_el:19,uniform_nois:18,uniformli:18,uniqu:[0,10],unit:17,until:22,upblock:12,updat:[0,1,13],upper:18,upscal:[0,3,7],url:22,usabl:13,use:[0,3,4,5,6,7,9,11,12,13,14,15,18],use_cuda:12,used:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,20],useful:21,user:22,uses:[3,5],using:[0,1,3,4,5,6,7,9,11,12,14,20,21],usual:[8,18],util:[0,3,4,11,13,14,23,25],valid:[0,3,4,5,6,8,11,12,13,14,22],validation_data:9,validation_len:[0,3,4,5,6],valu:[0,1,3,4,5,6,7,8,9,10,11,13,14,17,18,20,22],valueerror:8,variabl:[0,1,18],variant:13,vector:18,vedaldi:12,verbos:[0,1,22],version:[3,6],via:[0,3,4,6,7],virtual:[3,6],vision:12,visual:20,vrang:20,wai:[0,3,4,11,14],wang:10,want:3,water:17,weight:[8,15],weighted_averag:8,well:3,were:[3,6,8,20],when:[1,8],where:[3,6,15],whether:[0,3,4,6,7,8,9,11,12,13,14,19,20,22],which:[0,1,3,4,6,7,8,9,10,11,12,14,15,18,19,20],white:[0,3,7,18,19],white_nois:18,whole:9,whose:[0,3,7],width:8,within:12,worker:[0,3,4,12],wrap:[0,3,4,19],wrapper:[0,3,4,10,13],write:[12,21],written:[0,3,4,6,11,12,14,23],x_i:15,x_list:20,y_i:15,yield:[0,3,4,5,6,12,21],you:13,zenodo:[0,3,6,7,22],zenodo_download:[0,16,23],zero:[0,3,6,7,13],zero_seq:13},titles:["dival package","dival.config module","dival.data module","dival.datasets package","dival.datasets.dataset module","dival.datasets.ellipses_dataset module","dival.datasets.lodopab_dataset module","dival.datasets.standard module","dival.evaluation module","dival.hyper_param_search module","dival.measure module","dival.reconstructors package","dival.reconstructors.fbp_unet_reconstructor module","dival.reconstructors.odl_reconstructors module","dival.reconstructors.reconstructor module","dival.reconstructors.regression_reconstructors module","dival.util package","dival.util.constants module","dival.util.odl_noise_random_state module","dival.util.odl_utility module","dival.util.plot module","dival.util.std_out_err_redirect_tqdm module","dival.util.zenodo_download module","Deep Inversion Validation Library\u2019s documentation","&lt;no title&gt;","dival"],titleterms:{config:1,constant:17,content:[0,3,11,16],data:2,dataset:[3,4,5,6,7],deep:23,dival:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,25],document:23,ellipses_dataset:5,evalu:8,fbp_unet_reconstructor:12,hyper_param_search:9,invers:23,librari:23,lodopab_dataset:6,measur:10,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],odl_noise_random_st:18,odl_reconstructor:13,odl_util:19,packag:[0,3,11,16],plot:20,reconstructor:[11,12,13,14,15],regression_reconstructor:15,standard:7,std_out_err_redirect_tqdm:21,submodul:[0,3,11,16],subpackag:0,util:[16,17,18,19,20,21,22],valid:23,zenodo_download:22}})