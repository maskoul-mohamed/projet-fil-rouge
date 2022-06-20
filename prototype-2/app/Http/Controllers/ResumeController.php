<?php

namespace App\Http\Controllers;

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
        
        $respons= [];
        foreach($resumes as $resume){
            array_push($respons, [
                "resume" => $resume->resume,
                "personalInfo"=> $resume->personalInformation,
                "education"=> $resume->education,
                "experience"=> $resume->experience,
                "skill"=> $resume->skill,
                "profile"=> $resume->profile,
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
            $resume = Resume::create([
                'userId' => Auth::user()->id,
                'templateName' => $decodeReq["resume"]["templateName"],
            ]);
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

            
            foreach($decodeReq["skill"] as $item){
                Skill::create([
                'resumeId' => $resume->id, 
                'name' => $item,
                ]);
            }
             
           
            Profile::create([
                'resumeId' => $resume->id, 
                'description' => $decodeReq['profile'],
                ]);
            
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
        //
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
