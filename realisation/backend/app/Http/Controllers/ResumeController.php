<?php

namespace App\Http\Controllers;

use Storage;
use DB;
use Auth;
use Illuminate\Http\Request;
use App\Models\Resume;
use App\Models\User;
use App\Models\PersonalInformation;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Skill;
use App\Models\Profile;
use App\Models\Language;
use App\Models\Interest;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;


class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $resumes = User::find(Auth::user()->id)->resumes;
        // $personalInformation = Resume::find($resume[0]->id)->personalInformation;
        
        $path= storage_path('images');
        $respons= [];
        foreach($resumes as $resume){
            array_push($respons, [
                "resume" => $resume,
                "personalInfo"=>$resume->personalInformation, 
                    
                "education"=> $resume->education,
                "experience"=> $resume->experience,
                "skill"=> $resume->skill,
                "profile"=> $resume->profile,
                "language"=> $resume->language,
                "interest"=> $resume->interest,
            ]);
        }
        // return [
        //     // "resume"=> [$resumes, $resumes[0]->personalInformation],
        //     // "personalInformation"=> $personalInformation,
            
        // ];
        return $respons;
        // $result = User::with("resumes", "personalInformation")
        //             ->whereId(Auth::user()->id)
        //             ->whereHas("resumes")
        //             ->whereHas("personalInformation")
        //             ->get();
        // return $result;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $decodeReq = json_decode($request->getContent(), true);
        DB::transaction(function () use ($decodeReq) {
            // $resume = Resume::create([
            //     'userId' => Auth::user()->id,
            //     'templateName' => $decodeReq["resume"]["templateName"],
            // ]);
            
            // $fileName;
            // $image = json_decode($request['image']);
            // return response([$image, "dfdfds"]);
            // $fileName = str_random(6) . time()  ;

            // $destinationPath = storage_path('images');

            //  Storage::disk($destinationPath)->put($fileName, base64_decode($image));
            // $image->move($destinationPath, $fileName);
            // $img = Image::make($image);
            // $img->resize(150, 150, function ($constraint) 
            //  {
            //     $constraint->aspectRatio();
            //  })->save($destinationPath.'/'.$fileName);
            //  $destinationPath = storage_path('images');
            //  Image::make($image)->save($destinationPath.'/'.$fileName);
                // $image =  $decodeReq->file('image');
            // if($decodeReq->hasFile('image')) {
            //      $image = $decodeReq->file('image');
            //      $destinationPath = storage_path('images');
            //      $fileName = str_random(6) . time() . "." . $image->getClientOriginalExtension();
            //      $image->move($destinationPath, $fileName);
            //     return response($fileName);
            // } else {
            //     $image = "none";
            //     $fileName = "none";
                
            // }
    
            $personalInformation = PersonalInformation::create([
                'resumeId' => $resume->id, 
                'firstName' => $decodeReq["personalInformation"]["firstName"],
                'lastName' => $decodeReq["personalInformation"]["lastName"],
                'postTitle' => $decodeReq["personalInformation"]["postTitle"],
                'email' => $decodeReq["personalInformation"]["email"],
                'phone' => $decodeReq["personalInformation"]["phone"],
                'address' => $decodeReq["personalInformation"]["address"],
                'state' => $decodeReq["personalInformation"]["state"],
                'city' => $decodeReq["personalInformation"]["city"],
                'zip' => $decodeReq["personalInformation"]["zip"],
                'image' => $decodeReq["personalInformation"]["image"],                
            ]);
            foreach($decodeReq["experience"] as $item){
             
                Experience::create([
                'resumeId' => $resume->id, 
                'jobTitle' => $item["jobTitle"],
                'state' => $item["state"],
                'employer' => $item["employer"],
                'city' => $item["city"],
                'startDate' => $item["startDate"],
                'endDate' => $item["endDate"],
                'description' => $item["description"],
                ]);
            }

            foreach($decodeReq["education"] as $item){
                Education::create([
                'resumeId' => $resume->id, 
                'schoolName' => $item["schoolName"],
                'location' => $item["location"],
                'degree' => $item["degree"],
                'fieldOfStudy' => $item["fieldOfStudy"],
                'startDate' => $item["startDate"],
                'endDate' => $item["endDate"],
                'description' => $item["description"],
                ]);
            }

            
            foreach($decodeReq["skills"] as $item){
                Skill::create([
                'resumeId' => $resume->id, 
                'name' => $item,
                ]);
            }
            foreach($decodeReq["interests"] as $item){
                Interest::create([
                'resumeId' => $resume->id, 
                'name' => $item,
                ]);
            }
            
            Profile::create([
                'resumeId' => $resume->id, 
                'description' => $decodeReq['profile'],
                ]);

            foreach($decodeReq["languages"] as $item){
                Language::create([
                'resumeId' => $resume->id, 
                'name' => $item["name"],
                'level' => $item["level"],
                ]);
            }
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $decodeReq = json_decode($request->getContent(), true);
        DB::transaction(function () use ($decodeReq,$id) {
            $resume = Resume::find($id);
            $resume->update([
                'templateName' => $decodeReq["resume"]["templateName"],
            ]);
            $personalInformation = PersonalInformation::where('resumeId', $id);
            $personalInformation->update([
                'firstName' => $decodeReq["personalInformation"]["firstName"],
                'lastName' => $decodeReq["personalInformation"]["lastName"],
                'postTitle' => $decodeReq["personalInformation"]["postTitle"],
                'email' => $decodeReq["personalInformation"]["email"],
                'phone' => $decodeReq["personalInformation"]["phone"],
                'address' => $decodeReq["personalInformation"]["address"],
                'state' => $decodeReq["personalInformation"]["state"],
                'city' => $decodeReq["personalInformation"]["city"],
                'zip' => $decodeReq["personalInformation"]["zip"],
                'image' => $decodeReq["personalInformation"]["image"],                
            ]);
            foreach($decodeReq["experience"] as $item){
                $experience = Experience::where('resumeId', $id);
                $experience->update([
                'jobTitle' => $item["jobTitle"],
                'state' => $item["state"],
                'employer' => $item["employer"],
                'city' => $item["city"],
                'startDate' => $item["startDate"],
                'endDate' => $item["endDate"],
                'description' => $item["description"],
                ]);
            }

            foreach($decodeReq["education"] as $item){
                $education = Education::where('resumeId', $id);

                $education->update([
                'schoolName' => $item["schoolName"],
                'location' => $item["location"],
                'degree' => $item["degree"],
                'fieldOfStudy' => $item["fieldOfStudy"],
                'startDate' => $item["startDate"],
                'endDate' => $item["endDate"],
                'description' => $item["description"],
                ]);
            }

            
            foreach($decodeReq["skills"] as $item){
                $skill = Skill::where('resumeId', $id);
                $skill->update([
                'name' => $item,
                ]);
            }
            foreach($decodeReq["interests"] as $item){
                $interest = Interest::where('resumeId', $id);

                $interest->update([
                'name' => $item,
                ]);
            }

            $profile = Profile::where('resumeId', $id);
            $profile->update([
                'description' => $decodeReq['profile'],
                ]);

            foreach($decodeReq["languages"] as $item){
                $language = Language::where('resumeId', $id);
                $language->update([
                'name' => $item["name"],
                'level' => $item["level"],
                ]);
            }
        });
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
